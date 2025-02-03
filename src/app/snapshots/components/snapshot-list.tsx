"use client";

import { useRouter } from "next/navigation";
import { Snapshot } from "@/app/api/snapshots/route";

export function SnapshotList({ snapshots }: { snapshots: Snapshot[] }) {
  const router = useRouter();
  return (
    <ul className="text-lg space-y-1">
      {snapshots.map((snapshot) => (
        <li key={snapshot.id}>
          <span
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            onClick={() => router.push("/snapshots/" + snapshot.id)}
          >
            {snapshot.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
