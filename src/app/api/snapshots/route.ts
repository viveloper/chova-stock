import { NextRequest, NextResponse } from "next/server";
import { Snapshot } from "@/app/api/snapshots/types";
import { getDB } from "@/lib/db";

const db = getDB();

// 📌 스냅샷 목록 조회 (GET /snapshots)
export async function GET() {
  try {
    return NextResponse.json(db.data.snapshots);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch snapshots" },
      { status: 500 },
    );
  }
}

// 📌 스냅샷 추가 (POST /snapshots)
export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const newSnapshot: Snapshot = {
      id: Date.now(), // 간단한 고유 ID 생성
      name,
      tickers: [],
    };

    db.data.snapshots.push(newSnapshot);
    await db.write();

    return NextResponse.json(newSnapshot, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to save snapshot" },
      { status: 500 },
    );
  }
}
