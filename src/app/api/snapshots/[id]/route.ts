import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";

const db = getDB();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  const snapshot = db.data.snapshots.find((s) => s.id === Number(id));
  if (!snapshot) {
    return NextResponse.json({ error: "Snapshot not found" }, { status: 404 });
  }
  return NextResponse.json(snapshot);
}
