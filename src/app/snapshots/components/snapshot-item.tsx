"use client";

import { Snapshot } from "@/app/api/snapshots/types";
import { useRouter } from "next/navigation";

export function SnapshotItem({ snapshot }: { snapshot: Snapshot }) {
  const router = useRouter();
  return (
    <span
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
      onClick={() => router.push("/snapshots/" + snapshot.id)}
    >
      {`${snapshot.name} (${snapshot.id})`}
    </span>
  );
}
