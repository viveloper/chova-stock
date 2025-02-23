import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import { sleep } from "@/lib/sleep";
import { PutSnapshotRequest, Ticker } from "@/app/api/snapshots/types";

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
  const reqData: PutSnapshotRequest = await request.json();
  const { category, name, quantity, purchasePrice, currentPrice } = reqData;
  const purchaseAmount = quantity * purchasePrice;
  const valuationAmount = quantity * currentPrice;
  const valuationGainLoss = valuationAmount - purchaseAmount;
  const profitRate = (valuationGainLoss / purchaseAmount) * 100;

  const newTicker: Ticker = {
    category, // 구분
    name, // 종목
    quantity, // 수량
    purchasePrice, // 매입단가
    currentPrice, // 현재가
    purchaseAmount, // 매입금액
    valuationAmount, // 평가금액
    valuationGainLoss, // 평가손익
    profitRate, // 수익률
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
