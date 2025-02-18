"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import queryString from "query-string";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

type FormState = z.infer<typeof FormSchema>;

export const SearchFilterForm = () => {
  const form = useForm<FormState>({
    resolver: zodResolver(FormSchema),
  });
  const router = useRouter();

  const onSubmit = (data: FormState) => {
    const qs = queryString.stringify({
      startDate: data.startDate?.toISOString(),
      endDate: data.endDate?.toISOString(),
    });
    router.push(qs ? `?${qs}` : "", { scroll: false });
  };

  return (
    <div>
      <div>SearchFilter</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>시작일</FormLabel>
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  fullWidth
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>마지막일</FormLabel>
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
            <Button className="w-16" type="submit">
              검색
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
