import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ticker } from "@/app/api/snapshots/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TickerList({ ticker }: { ticker: Ticker }) {
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {ticker.items.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.category}</TableCell>
            {/* TODO: edit ticker (modal form) */}
            <TableCell>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">
                      {item.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>수정하려면 클릭하세요.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>${item.purchasePrice.toFixed(3)}</TableCell>
            <TableCell>${item.purchaseAmount.toFixed(3)}</TableCell>
            <TableCell>${item.currentPrice.toFixed(3)}</TableCell>
            <TableCell>${item.valuationAmount.toFixed(3)}</TableCell>
            <TableCell>${item.valuationGainLoss.toFixed(2)}</TableCell>
            <TableCell>{item.profitRate.toFixed(2)}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>합계</TableCell>
          <TableCell colSpan={2}>{ticker.totalQuantity}</TableCell>
          <TableCell colSpan={2}>${ticker.totalPurchaseAmount}</TableCell>
          <TableCell>${ticker.totalValuationAmount}</TableCell>
          <TableCell>${ticker.totalValuationGainLoss}</TableCell>
          <TableCell>{ticker.totalProfitRate}%</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
