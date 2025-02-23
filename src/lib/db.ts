// JSON DB 설정
// Read or create db.json
import { Snapshot } from "@/app/api/snapshots/types";
import { JSONFilePreset } from "lowdb/node";

type Database = {
  snapshots: Snapshot[];
};
const defaultData: Database = {
  snapshots: [
    {
      id: 1739888702422,
      name: "2025-02-20",
      tickers: [
        {
          name: "IEF",
          category: "채권",
          quantity: 3,
          purchasePrice: 222.108,
          purchaseAmount: 1515.832,
          currentPrice: 222.112,
          valuationAmount: 1583.628,
          valuationGainLoss: 68.42,
          profitRate: 1.12,
        },
        {
          category: "배당",
          name: "SCHD",
          quantity: 5,
          purchasePrice: 222.108,
          purchaseAmount: 1515.832,
          currentPrice: 222.112,
          valuationAmount: 1583.628,
          valuationGainLoss: 68.42,
          profitRate: 1.12,
        },
        {
          category: "배당",
          name: "VNQ",
          quantity: 16,
          purchasePrice: 222.108,
          purchaseAmount: 1515.832,
          currentPrice: 222.112,
          valuationAmount: 1583.628,
          valuationGainLoss: 68.42,
          profitRate: 1.12,
        },
        {
          category: "성장",
          name: "AAPL",
          quantity: 22,
          purchasePrice: 222.108,
          purchaseAmount: 1515.832,
          currentPrice: 222.112,
          valuationAmount: 1583.628,
          valuationGainLoss: 68.42,
          profitRate: 1.12,
        },
        {
          category: "성장",
          name: "QQQM",
          quantity: 8,
          purchasePrice: 222.108,
          purchaseAmount: 1515.832,
          currentPrice: 222.112,
          valuationAmount: 1583.628,
          valuationGainLoss: 68.42,
          profitRate: 1.12,
        },
        {
          category: "성장",
          name: "GOOGL",
          quantity: 11,
          purchasePrice: 222.108,
          purchaseAmount: 1515.832,
          currentPrice: 222.112,
          valuationAmount: 1583.628,
          valuationGainLoss: 68.42,
          profitRate: 1.12,
        },
      ],
    },
  ],
};

const db = await JSONFilePreset<Database>("db.json", defaultData);

export function getDB() {
  return db;
}
