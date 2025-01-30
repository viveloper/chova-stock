"use client";

import { useRouter } from "next/navigation";

const data = [
  {
    id: 5,
    name: "2025-01-28",
  },
  {
    id: 4,
    name: "2024-12-31",
  },
  {
    id: 3,
    name: "2024-11-30",
  },
  {
    id: 2,
    name: "2024-10-28",
  },
  {
    id: 1,
    name: "2024-09-30",
  },
];

export function SnapshotList() {
  const router = useRouter();
  return (
    <ul className="text-lg space-y-1">
      {data.map((snapshot) => (
        <li
          key={snapshot.id}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
          onClick={() => router.push("/snapshots/" + snapshot.id)}
        >
          {snapshot.name}
        </li>
      ))}
    </ul>
  );
}
