import { getUsers, createUser } from "../controllers/users.controller.js";

export async function router(req) {
  const url = new URL(req.url);

  if (req.method === "GET" && url.pathname === "/ping") {
    return new Response("pong", { status: 200 });
  }

  if (req.method === "GET" && url.pathname === "/users") {
    return await getUsers();
  }

  if (req.method === "POST" && url.pathname === "/users") {
    return await createUser(req);
  }

  return new Response("Not found", { status: 404 });
}
