"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SearchFilter() {
  const router = useRouter();
  return (
    <div className="border rounded-md p-2">
      <div className="flex justify-end space-x-1">
        <Button
          onClick={() => {
            console.log("refresh");
            router.refresh();
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
