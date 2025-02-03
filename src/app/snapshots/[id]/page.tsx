import { Button } from "@/components/ui/button";
import { PortfolioTable } from "@/app/snapshots/[id]/components/portfolio-table";
import { Ticker } from "@/app/api/snapshots/[id]/route";

export default async function Page() {
  const data = await fetch("http://localhost:3000/api/snapshots/1");
  const tickers: Ticker[] = await data.json();

  return (
    <div className="p-4">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xl">2025-01-28</div>
          <Button>종목 추가</Button>
        </div>
        <PortfolioTable tickers={tickers} />
      </div>
    </div>
  );
}
