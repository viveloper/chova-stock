import { NextRequest, NextResponse } from "next/server";
import { Snapshot } from "@/app/api/snapshots/types";
import { getDB } from "@/lib/db";
import { startOfDay } from "date-fns";

const db = getDB();

// 📌 스냅샷 목록 조회 (GET /snapshots)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  let filteredSnapshots: Snapshot[] = [];
  if (startDate && !endDate) {
    filteredSnapshots = db.data.snapshots.filter((snapshot) => {
      return (
        startOfDay(snapshot.name).getTime() >= startOfDay(startDate).getTime()
      );
    });
  } else if (!startDate && endDate) {
    filteredSnapshots = db.data.snapshots.filter((snapshot) => {
      return (
        startOfDay(snapshot.name).getTime() <= startOfDay(endDate).getTime()
      );
    });
  } else if (startDate && endDate) {
    filteredSnapshots = db.data.snapshots.filter((snapshot) => {
      return (
        startOfDay(snapshot.name).getTime() >=
          startOfDay(startDate).getTime() &&
        startOfDay(snapshot.name).getTime() <= startOfDay(endDate).getTime()
      );
    });
  } else {
    filteredSnapshots = db.data.snapshots;
  }

  try {
    return NextResponse.json(
      filteredSnapshots
        .toSorted((a, b) => b.id - a.id)
        .toSorted((a, b) => b.name.localeCompare(a.name)),
    );
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
