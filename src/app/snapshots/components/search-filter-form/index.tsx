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
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

const FormSchema = z.object({
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

type FormState = z.infer<typeof FormSchema>;

export const SearchFilterForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();

  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const form = useForm<FormState>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    },
  });

  const onSubmit = (data: FormState) => {
    startTransition(() => {
      const qs = queryString.stringify({
        startDate: data.startDate?.toISOString(),
        endDate: data.endDate?.toISOString(),
      });
      router.push(qs ? `?${qs}` : "", { scroll: false });
    });
  };

  return (
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

        <Button type="submit" disabled={isPending}>
          {isPending ? "로딩..." : "검색"}
        </Button>
      </form>
    </Form>
  );
};
