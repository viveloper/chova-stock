import { User } from "@/app/api/users/route";
import { TableDemo } from "@/app/users/components/table-demo";
import { SearchFilter } from "@/app/users/components/search-filter";
import { UserRegistration } from "@/app/users/components/user-registration";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/users");
  const users: User[] = await res.json();

  return (
    <div className="p-4 space-y-3">
      <UserRegistration />
      <SearchFilter />
      <TableDemo users={users} />
    </div>
  );
}
