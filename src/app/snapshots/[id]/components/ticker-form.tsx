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
import { Button } from "@/components/ui/button";
import { Snapshot } from "@/app/api/snapshots/types";
import { APP_ENV } from "@/env";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  category: z.string().min(1, "Required"),
  name: z.string().min(1, "Required"),
  quantity: z.preprocess(
    (v) => (typeof v === "string" && v.trim() !== "" ? Number(v) : v),
    z.number({
      required_error: "숫자를 입력해야 합니다.",
      invalid_type_error: "유효한 숫자를 입력하세요.",
    }),
  ),
  purchasePrice: z.preprocess(
    (v) => (typeof v === "string" && v.trim() !== "" ? Number(v) : v),
    z.number({
      required_error: "숫자를 입력해야 합니다.",
      invalid_type_error: "유효한 숫자를 입력하세요.",
    }),
  ),
  currentPrice: z.preprocess(
    (v) => (typeof v === "string" && v.trim() !== "" ? Number(v) : v),
    z.number({
      required_error: "숫자를 입력해야 합니다.",
      invalid_type_error: "유효한 숫자를 입력하세요.",
    }),
  ),
});

type FormState = z.infer<typeof FormSchema>;

export function TickerForm() {
  const form = useForm<FormState>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: "",
      name: "",
      quantity: 0,
      purchasePrice: 0,
      currentPrice: 0,
    },
  });

  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { id: snapshotId } = params;

  const onSubmit = async (data: FormState) => {
    const tickerName = data.name;
    try {
      const response = await fetch(
        `${APP_ENV.API_URL}/snapshots/${snapshotId}/tickers/${tickerName}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
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
          name="category"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>구분</FormLabel>
              <Input placeholder="성장" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>종목</FormLabel>
              <Input placeholder="AAPL" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>보유수량</FormLabel>
              <Input type="number" step="any" min={0} {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purchasePrice"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>매입단가(평단가)</FormLabel>
              <Input type="number" step="any" min={0} {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentPrice"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>현재가</FormLabel>
              <Input type="number" step="any" min={0} {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-right">
          {/* TODO: close modal */}
          <Button className="w-16" type="submit">
            추가
          </Button>
        </div>
      </form>
    </Form>
  );
}
