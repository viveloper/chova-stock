import { NextRequest } from "next/server";
import { sleep } from "@/lib/sleep";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const users: User[] = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    phone: "010-1234-5678",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    phone: "010-1234-5678",
  },
  {
    id: 3,
    name: "Alice",
    email: "alice@example.com",
    phone: "010-4321-8765",
  },
  {
    id: 4,
    name: "Foo",
    email: "foo@example.com",
    phone: "010-1357-2468",
  },
];

export async function GET() {
  await sleep(500);
  return Response.json(users);
}

export async function POST(request: NextRequest) {
  await sleep(500);
  const body: Omit<User, "id"> = await request.json();
  const newUser = addUser(body);
  return Response.json({ message: "User created", user: newUser });
}

function addUser(user: Omit<User, "id">): User {
  const newUser: User = {
    id: users.length + 1,
    ...user,
  };
  users.push(newUser);
  return newUser;
}
