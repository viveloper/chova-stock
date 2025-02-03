import { AddSnapshot } from "@/app/snapshots/components/add-snapshot";
import { SnapshotList } from "@/app/snapshots/components/snapshot-list";
import { Snapshot } from "@/app/api/snapshots/route";

export default async function Page() {
  const data = await fetch("http://localhost:3000/api/snapshots");
  const snapshots: Snapshot[] = await data.json();

  return (
    <div className="p-4">
      <div className="space-y-4">
        <AddSnapshot />
        <SnapshotList snapshots={snapshots} />
      </div>
    </div>
  );
}
