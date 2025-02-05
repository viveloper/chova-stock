import { sleep } from "@/lib/sleep";
import { NextRequest } from "next/server";

export type SnapshotDetail = {
  id: number;
  name: string;
  tickers: Ticker[];
};

export type Ticker = {
  category: string;
  ticker: string;
  description: string;
  quantity: number;
  purchasePrice: number;
  purchaseAmount: number;
  currentPrice: number;
  valuationAmount: number;
  valuationGainLoss: number;
  profitRate: number;
  weight: number;
};

const data: SnapshotDetail = {
  id: 1,
  name: "2025-01-28",
  tickers: [
    {
      category: "채권",
      ticker: "IEF",
      description: "",
      quantity: 3,
      purchasePrice: 222.108,
      purchaseAmount: 1515.832,
      currentPrice: 222.112,
      valuationAmount: 1583.628,
      valuationGainLoss: 68.42,
      profitRate: 1.12,
      weight: 2.26,
    },
    {
      category: "배당",
      ticker: "SCHD",
      description: "",
      quantity: 5,
      purchasePrice: 222.108,
      purchaseAmount: 1515.832,
      currentPrice: 222.112,
      valuationAmount: 1583.628,
      valuationGainLoss: 68.42,
      profitRate: 1.12,
      weight: 1.84,
    },
    {
      category: "배당",
      ticker: "VNQ",
      description: "",
      quantity: 16,
      purchasePrice: 222.108,
      purchaseAmount: 1515.832,
      currentPrice: 222.112,
      valuationAmount: 1583.628,
      valuationGainLoss: 68.42,
      profitRate: 1.12,
      weight: 13.65,
    },
    {
      category: "성장",
      ticker: "AAPL",
      description: "",
      quantity: 22,
      purchasePrice: 222.108,
      purchaseAmount: 1515.832,
      currentPrice: 222.112,
      valuationAmount: 1583.628,
      valuationGainLoss: 68.42,
      profitRate: 1.12,
      weight: 12.58,
    },
    {
      category: "성장",
      ticker: "QQQM",
      description: "",
      quantity: 8,
      purchasePrice: 222.108,
      purchaseAmount: 1515.832,
      currentPrice: 222.112,
      valuationAmount: 1583.628,
      valuationGainLoss: 68.42,
      profitRate: 1.12,
      weight: 13.42,
    },
    {
      category: "성장",
      ticker: "GOOGL",
      description: "",
      quantity: 11,
      purchasePrice: 222.108,
      purchaseAmount: 1515.832,
      currentPrice: 222.112,
      valuationAmount: 1583.628,
      valuationGainLoss: 68.42,
      profitRate: 1.12,
      weight: 12.51,
    },
  ],
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  await sleep(500);
  return Response.json({ ...data, id });
}
