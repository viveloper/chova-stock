import { Suspense } from "react";
import { AddSnapshot } from "@/app/snapshots/components/add-snapshot";
import { SearchFilterForm } from "@/app/snapshots/components/search-filter-form";
import { SnapshotList } from "@/app/snapshots/components/snapshot-list";

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
          <SnapshotList query={{ startDate, endDate }} />
        </Suspense>
      </div>
    </div>
  );
}
