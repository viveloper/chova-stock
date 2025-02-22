export type Snapshot = {
  id: number;
  name: string;
  tickers: Ticker[];
};

export type Ticker = {
  name: string;
  category: string;
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
