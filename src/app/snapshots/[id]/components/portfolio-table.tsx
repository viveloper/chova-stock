import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ticker } from "@/app/api/snapshots/[id]/route";

export function PortfolioTable({ tickers }: { tickers: Ticker[] }) {
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
        {tickers.map((item, index) => (
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
