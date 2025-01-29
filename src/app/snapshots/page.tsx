import { AddSnapshot } from "@/app/snapshots/components/add-snapshot";

export default function Page() {
  return (
    <div className="p-4">
      <div className="space-y-4">
        <AddSnapshot />
        <ul className="text-lg space-y-1">
          <li className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">
            2025-01-28
          </li>
          <li className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">
            2024-12-31
          </li>
          <li className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">
            2024-11-30
          </li>
          <li className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">
            2024-10-28
          </li>
        </ul>
      </div>
    </div>
  );
}
