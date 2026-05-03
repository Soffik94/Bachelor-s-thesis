import { createUser, getUsers } from "../controllers/users.controller.js";

export async function handleUsers(req) {
  if (req.method === "GET") {
    const result = await getUsers();

    return Response.json(result.body, { status: result.status });
  }

  if (req.method === "POST") {
    let body;

    try {
      body = await req.json();
    } catch {
      return Response.json({ error: "invalid json" }, { status: 400 });
    }

    const result = await createUser(body);

    return Response.json(result.body, { status: result.status });
  }

  return Response.json({ error: "method not allowed" }, { status: 405 });
}
