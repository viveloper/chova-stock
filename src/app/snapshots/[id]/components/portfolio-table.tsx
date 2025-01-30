import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
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
];

export function PortfolioTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>구분</TableHead>
          <TableHead>종목</TableHead>
          <TableHead>수량</TableHead>
          <TableHead>매입단가</TableHead>
          <TableHead>매입금액</TableHead>
          <TableHead>현재가</TableHead>
          <TableHead>평가금액</TableHead>
          <TableHead>평가손익</TableHead>
          <TableHead>수익률</TableHead>
          <TableHead>비중</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.ticker}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>${item.purchasePrice.toFixed(3)}</TableCell>
            <TableCell>${item.purchaseAmount.toFixed(3)}</TableCell>
            <TableCell>${item.currentPrice.toFixed(3)}</TableCell>
            <TableCell>${item.valuationAmount.toFixed(3)}</TableCell>
            <TableCell>${item.valuationGainLoss.toFixed(2)}</TableCell>
            <TableCell>{item.profitRate.toFixed(2)}%</TableCell>
            <TableCell>{item.weight.toFixed(2)}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>합계</TableCell>
          <TableCell colSpan={2}>77</TableCell>
          <TableCell colSpan={2}>$2875.244</TableCell>
          <TableCell>$2875.244</TableCell>
          <TableCell colSpan={2}>$2875.244</TableCell>
          <TableCell>100%</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
