import { AddSnapshot } from "@/app/snapshots/components/add-snapshot";
import { SnapshotList } from "@/app/snapshots/components/snapshot-list";

export default function Page() {
  return (
    <div className="p-4">
      <div className="space-y-4">
        <AddSnapshot />
        <SnapshotList />
      </div>
    </div>
  );
}
