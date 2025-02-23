import { TickerList } from "@/app/snapshots/[id]/components/ticker-list";
import { APP_ENV } from "@/env";
import { Snapshot } from "@/app/api/snapshots/types";
import { AddTicker } from "@/app/snapshots/[id]/components/add-ticker";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const snapshotId = (await params).id;
  console.log("snapshotId", snapshotId);
  const data = await fetch(`${APP_ENV.API_URL}/snapshots/${snapshotId}`);
  const snapshot: Snapshot = await data.json();

  return (
    <div className="p-4">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xl">{`${snapshot.name}(${snapshot.id})`}</div>
          <AddTicker />
        </div>
        <TickerList tickers={snapshot.tickers} />
      </div>
    </div>
  );
}
