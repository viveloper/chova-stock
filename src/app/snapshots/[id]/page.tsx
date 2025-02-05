import { Button } from "@/components/ui/button";
import { TickerList } from "@/app/snapshots/[id]/components/ticker-list";
import { Ticker } from "@/app/api/snapshots/[id]/route";
import { APP_ENV } from "@/env";

export default async function Page() {
  const data = await fetch(`${APP_ENV.API_URL}/api/snapshots/1`);
  const tickers: Ticker[] = await data.json();

  return (
    <div className="p-4">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xl">2025-01-28</div>
          <Button>종목 추가</Button>
        </div>
        <TickerList tickers={tickers} />
      </div>
    </div>
  );
}
