import { Button } from "@/components/ui/button";
import { PortfolioTable } from "@/app/snapshots/[id]/components/portfolio-table";

export type Ticker = {
  category: string;
  ticker: string;
  quantity: number;
  purchasePrice: number;
  purchaseAmount: number;
  currentPrice: number;
  valuationAmount: number;
  valuationGainLoss: number;
  profitRate: number;
  weight: number;
};

const data: { tickers: Ticker[] } = {
  tickers: [
    {
      category: "채권",
      ticker: "IEF",
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

export default function Page() {
  return (
    <div className="p-4">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xl">2025-01-28</div>
          <Button>종목 추가</Button>
        </div>
        <PortfolioTable tickers={data.tickers} />
      </div>
    </div>
  );
}
