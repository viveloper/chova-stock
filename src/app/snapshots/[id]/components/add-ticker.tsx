"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TickerForm } from "@/app/snapshots/[id]/components/ticker-form";

export function AddTicker() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>종목 추가</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>종목 추가</DialogTitle>
          <DialogDescription>
            종목을 추가하세요. 데이터를 입력하고 추가를 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        <TickerForm />
      </DialogContent>
    </Dialog>
  );
}
