import { AddSnapshot } from "@/app/snapshots/components/add-snapshot";
import { SnapshotList } from "@/app/snapshots/components/snapshot-list";
import { APP_ENV } from "@/env";
import { Snapshot } from "@/app/api/snapshots/types";
import { SearchFilterForm } from "@/app/snapshots/components/search-filter-form";

async function getSnapshots() {
  const data = await fetch(`${APP_ENV.API_URL}/snapshots`, {
    cache: "no-store",
  });
  const snapshots: Snapshot[] = await data.json();
  return snapshots;
}

export default async function Page() {
  const snapshots = await getSnapshots();
  return (
    <div className="p-4">
      <div className="space-y-4">
        <AddSnapshot />
        <SearchFilterForm />
        <SnapshotList snapshots={snapshots} />
      </div>
    </div>
  );
}
