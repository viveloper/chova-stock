"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Snapshot } from "@/app/api/snapshots/types";

export function SnapshotList({ list }: { list: Promise<Snapshot[]> }) {
  const router = useRouter();
  const snapshots = use(list);
  return (
    <ul className="text-lg space-y-1">
      {snapshots.length > 0 ? (
        snapshots.map((snapshot) => (
          <li key={snapshot.id}>
            <span
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
              onClick={() => router.push("/snapshots/" + snapshot.id)}
            >
              {`${snapshot.name} (${snapshot.id})`}
            </span>
          </li>
        ))
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </ul>
  );
}
