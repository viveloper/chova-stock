import { Suspense } from "react";
import { AddSnapshot } from "@/app/snapshots/components/add-snapshot";
import { SnapshotList } from "@/app/snapshots/components/snapshot-list";
import { APP_ENV } from "@/env";
import { Snapshot } from "@/app/api/snapshots/types";
import { SearchFilterForm } from "@/app/snapshots/components/search-filter-form";
import queryString from "query-string";

async function getSnapshots({
  query: { startDate, endDate },
}: {
  query: {
    startDate: string | string[] | undefined;
    endDate: string | string[] | undefined;
  };
}) {
  const qs = queryString.stringify({ startDate, endDate });
  const data = await fetch(
    `${APP_ENV.API_URL}/snapshots${qs ? `?${qs}` : ""}`,
    {
      cache: "no-store",
    },
  );
  const snapshots: Snapshot[] = await data.json();
  return snapshots;
}

async function SnapshotListWrapper({
  startDate,
  endDate,
}: {
  startDate: string | string[] | undefined;
  endDate: string | string[] | undefined;
}) {
  const snapshots = await getSnapshots({ query: { startDate, endDate } });
  return <SnapshotList snapshots={snapshots} />;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { startDate, endDate } = await searchParams;

  return (
    <div className="p-4">
      <div className="space-y-4">
        <AddSnapshot />
        <SearchFilterForm />
        <Suspense fallback={<p>Loading snapshots...</p>}>
          <SnapshotListWrapper startDate={startDate} endDate={endDate} />
        </Suspense>
      </div>
    </div>
  );
}
