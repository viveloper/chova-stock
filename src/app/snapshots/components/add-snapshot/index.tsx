"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SnapshotForm } from "@/app/snapshots/components/add-snapshot/snapshot-form";

export function AddSnapshot() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>스냅샷 추가</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>스냅샷 추가</DialogTitle>
          <DialogDescription>
            스냅샷을 추가하세요. 기준 날짜를 선택하고 추가를 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        <SnapshotForm />
      </DialogContent>
    </Dialog>
  );
}
