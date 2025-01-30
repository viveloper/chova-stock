import { Button } from "@/components/ui/button";
import { PortfolioTable } from "@/app/snapshots/[id]/components/portfolio-table";

export default function Page() {
  return (
    <div className="p-4">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xl">2025-01-28</div>
          <Button>종목 추가</Button>
        </div>
        <PortfolioTable />
      </div>
    </div>
  );
}
