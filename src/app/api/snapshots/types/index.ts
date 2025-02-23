export type Snapshot = {
  id: number;
  name: string;
  tickers: Ticker[];
};

export type Ticker = {
  category: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  purchaseAmount: number;
  valuationAmount: number;
  valuationGainLoss: number;
  profitRate: number;
};

export type PutSnapshotRequest = Pick<
  Ticker,
  "category" | "name" | "quantity" | "purchasePrice" | "currentPrice"
>;
