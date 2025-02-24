import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import { sleep } from "@/lib/sleep";
import {
  PostTickerRequest,
  PutTickerRequest,
  TickerItem,
} from "@/app/api/snapshots/types";

const db = getDB();

// 📌 Ticker 추가 (POST /snapshots/:snapshotId/tickers/:tickerName)
export async function POST(
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

  const tickerItem = snapshot.ticker.items.find((t) => t.name === tickerName);
  if (tickerItem) {
    return NextResponse.json(
      { error: "The same ticker already exists." },
      { status: 400 },
    );
  }

  const reqData: PostTickerRequest = await request.json();
  const { category, name, quantity, purchasePrice, currentPrice } = reqData;
  const purchaseAmount = quantity * purchasePrice;
  const valuationAmount = quantity * currentPrice;
  const valuationGainLoss = valuationAmount - purchaseAmount;
  const profitRate = (valuationGainLoss / purchaseAmount) * 100;

  const newTickerItem: TickerItem = {
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

  snapshot.ticker.items.push(newTickerItem);
  const totalFields = getTotalFields(snapshot.ticker.items);
  snapshot.ticker = { ...snapshot.ticker, ...totalFields };
  await db.write();
  return NextResponse.json(newTickerItem);
}

// 📌 Ticker 수정 (PUT /snapshots/:snapshotId/tickers/:tickerName)
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

  const tickerItem = snapshot.ticker.items.find((t) => t.name === tickerName);
  if (!tickerItem) {
    return NextResponse.json({ error: "Ticker not found." }, { status: 404 });
  }

  const reqData: PutTickerRequest = await request.json();
  const { category, name, quantity, purchasePrice, currentPrice } = reqData;
  const purchaseAmount = quantity * purchasePrice;
  const valuationAmount = quantity * currentPrice;
  const valuationGainLoss = valuationAmount - purchaseAmount;
  const profitRate = (valuationGainLoss / purchaseAmount) * 100;

  const newTickerItem: TickerItem = {
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

  Object.assign(tickerItem, newTickerItem);
  const totalFields = getTotalFields(snapshot.ticker.items);
  snapshot.ticker = { ...snapshot.ticker, ...totalFields };
  await db.write();
  return NextResponse.json(tickerItem);
}

function getTotalFields(items: TickerItem[]) {
  const totalQuantity = items.reduce((acc, t) => acc + t.quantity, 0);
  const totalPurchaseAmount = items.reduce(
    (acc, t) => acc + t.purchaseAmount,
    0,
  );
  const totalValuationAmount = items.reduce(
    (acc, t) => acc + t.valuationAmount,
    0,
  );
  const totalValuationGainLoss = items.reduce(
    (acc, t) => acc + t.valuationGainLoss,
    0,
  );
  const totalProfitRate = (totalValuationGainLoss / totalPurchaseAmount) * 100;
  return {
    totalQuantity,
    totalPurchaseAmount,
    totalValuationAmount,
    totalValuationGainLoss,
    totalProfitRate,
  };
}
