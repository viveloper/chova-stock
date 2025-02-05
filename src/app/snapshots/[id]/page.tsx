import { Button } from "@/components/ui/button";
import { TickerList } from "@/app/snapshots/[id]/components/ticker-list";
import { APP_ENV } from "@/env";
import { SnapshotDetail } from "@/app/api/snapshots/[id]/route";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const snapshotId = (await params).id;
  console.log("snapshotId", snapshotId);
  const data = await fetch(`${APP_ENV.API_URL}/snapshots/${snapshotId}`);
  const snapshotDetail: SnapshotDetail = await data.json();

  return (
    <div className="p-4">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xl">{`${snapshotDetail.name}(${snapshotDetail.id})`}</div>
          <Button>종목 추가</Button>
        </div>
        <TickerList tickers={snapshotDetail.tickers} />
      </div>
    </div>
  );
}
