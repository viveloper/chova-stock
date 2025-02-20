import { Suspense } from "react";
import { AddSnapshot } from "@/app/snapshots/components/add-snapshot";
import { SearchFilterForm } from "@/app/snapshots/components/search-filter-form";
import { SnapshotList } from "@/app/snapshots/components/snapshot-list";
import queryString from "query-string";
import { APP_ENV } from "@/env";
import { Snapshot } from "@/app/api/snapshots/types";

async function fetchSnapshots({
  startDate,
  endDate,
}: {
  startDate: string | string[] | undefined;
  endDate: string | string[] | undefined;
}): Promise<Snapshot[]> {
  const qs = queryString.stringify({ startDate, endDate });
  const data = await fetch(
    `${APP_ENV.API_URL}/snapshots${qs ? `?${qs}` : ""}`,
    {
      cache: "no-store",
    },
  );
  return await data.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { startDate, endDate } = await searchParams;
  const snapshots = fetchSnapshots({ startDate, endDate });

  return (
    <div className="p-4">
      <div className="space-y-4">
        <AddSnapshot />
        <SearchFilterForm />
        <Suspense fallback={<p>Loading snapshots...</p>}>
          <SnapshotList list={snapshots} />
        </Suspense>
      </div>
    </div>
  );
}
