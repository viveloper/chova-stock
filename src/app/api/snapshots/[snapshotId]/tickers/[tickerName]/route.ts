import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import { sleep } from "@/lib/sleep";
import { Ticker } from "@/app/api/snapshots/types";

const db = getDB();

// 📌 스냅샷 수정 (PUT /snapshots/:snapshotId/tickers/:tickerName)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ snapshotId: string; tickerName: string }> },
) {
  await sleep(1000); // delay 1s
  const snapshotId = (await params).snapshotId;
  const tickerName = (await params).tickerName;
  const snapshot = db.data.snapshots.find((s) => s.id === Number(snapshotId));

  if (!snapshot) {
    return NextResponse.json({ error: "Snapshot not found" }, { status: 404 });
  }

  const ticker = snapshot.tickers.find((t) => t.name === tickerName);
  // const data: Ticker = await request.json();
  // TODO: create newTicker from request data
  const newTicker: Ticker = {
    category: "테스트",
    name: "TEST",
    description: "",
    quantity: 11,
    purchasePrice: 222.108,
    purchaseAmount: 1515.832,
    currentPrice: 222.112,
    valuationAmount: 1583.628,
    valuationGainLoss: 68.42,
    profitRate: 1.13,
    weight: 12.51,
  };

  if (!ticker) {
    snapshot.tickers.push(newTicker);
    await db.write();
    return NextResponse.json(newTicker);
  }
  Object.assign(ticker, newTicker);
  await db.write();
  return NextResponse.json(ticker);
}
