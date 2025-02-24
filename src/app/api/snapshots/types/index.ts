export type Snapshot = {
  id: number;
  name: string;
  ticker: Ticker;
};

export type Ticker = {
  items: TickerItem[];
  totalQuantity: number;
  totalPurchaseAmount: number;
  totalValuationAmount: number;
  totalValuationGainLoss: number;
  totalProfitRate: number;
};

export type TickerItem = {
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

export type PostTickerRequest = Pick<
  TickerItem,
  "category" | "name" | "quantity" | "purchasePrice" | "currentPrice"
>;

export type PutTickerRequest = PostTickerRequest;
