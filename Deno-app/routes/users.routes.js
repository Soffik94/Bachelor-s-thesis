import { createUser, getUsers } from "../controllers/users.controller.js";

export async function handleUsers(req) {
  if (req.method === "GET") {
    const result = await getUsers();

    return new Response(JSON.stringify(result.body), {
      status: result.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (req.method === "POST") {
    const body = await req.json();
    const result = await createUser(body);

    return new Response(JSON.stringify(result.body), {
      status: result.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Method Not Allowed", { status: 405 });
}