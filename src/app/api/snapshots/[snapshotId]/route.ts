import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import { sleep } from "@/lib/sleep";

const db = getDB();

// 📌 스냅샷 상세 조회 (GET /snapshots/:snapshotId)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ snapshotId: string }> },
) {
  await sleep(1000); // delay 1s
  const snapshotId = (await params).snapshotId;
  const snapshot = db.data.snapshots.find((s) => s.id === Number(snapshotId));
  if (!snapshot) {
    return NextResponse.json({ error: "Snapshot not found" }, { status: 404 });
  }
  return NextResponse.json(snapshot);
}
