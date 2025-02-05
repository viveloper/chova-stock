import { sleep } from "@/lib/sleep";
import { NextRequest } from "next/server";

export type Snapshot = {
  id: number;
  name: string;
};

const DATA: { snapshots: Snapshot[] } = {
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
  return Response.json(DATA.snapshots);
}

export async function POST(request: NextRequest) {
  const body: Omit<Snapshot, "id"> = await request.json();
  // TODO: register snapshot
  const newSnapshot = { ...body, id: 1000 };
  await sleep(500);
  return Response.json(newSnapshot);
}
