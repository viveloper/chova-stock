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
    },
  ],
};

const db = await JSONFilePreset<Database>("db.json", defaultData);

export function getDB() {
  return db;
}
