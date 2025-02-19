import { Snapshot } from "@/app/api/snapshots/types";
import queryString from "query-string";
import { APP_ENV } from "@/env";
import { SnapshotItem } from "@/app/snapshots/components/snapshot-item";

export async function SnapshotList({
  query,
}: {
  query: {
    startDate: string | string[] | undefined;
    endDate: string | string[] | undefined;
  };
}) {
  const snapshots = await fetchSnapshots({ query });
  return (
    <ul className="text-lg space-y-1">
      {snapshots.length > 0 ? (
        snapshots.map((snapshot) => (
          <li key={snapshot.id}>
            <SnapshotItem snapshot={snapshot} />
          </li>
        ))
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </ul>
  );
}

async function fetchSnapshots({
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
