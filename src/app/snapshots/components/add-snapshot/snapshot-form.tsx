import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Snapshot } from "@/app/api/snapshots/types";
import { APP_ENV } from "@/env";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { DialogClose } from "@/components/ui/dialog";

const FormSchema = z.object({
  name: z.date({
    required_error: "날짜를 선택하세요.",
  }),
});

type FormState = z.infer<typeof FormSchema>;

export function SnapshotForm() {
  const form = useForm<FormState>({
    resolver: zodResolver(FormSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormState) => {
    try {
      const response = await fetch(`${APP_ENV.API_URL}/snapshots`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: format(data.name, "yyyy-MM-dd") }),
      });

      if (!response.ok) {
        alert(`HTTP error! Status: ${response.status}`);
        toast({
          title: "Error",
          variant: "destructive",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{`HTTP error! Status: ${response.status}`}</code>
            </pre>
          ),
        });
        return;
      }

      const result: Snapshot = await response.json();
      toast({
        title: "Success",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(result, null, 2)}
            </code>
          </pre>
        ),
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(error, null, 2)}</code>
          </pre>
        ),
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>날짜</FormLabel>
              <DatePicker
                value={field.value}
                onChange={field.onChange}
                fullWidth
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-right">
          <DialogClose asChild>
            <Button className="w-16" type="submit">
              추가
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
