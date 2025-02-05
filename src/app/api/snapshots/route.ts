import { sleep } from "@/lib/sleep";

export type Snapshot = {
  id: number;
  name: string;
};

const data: { snapshots: Snapshot[] } = {
  snapshots: [
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
  ],
};

export async function GET() {
  await sleep(500);
  return Response.json(data.snapshots);
}

export async function POST() {
  await sleep(500);
  return Response.json(data.snapshots);
}
