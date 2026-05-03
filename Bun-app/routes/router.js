import { getUsers, createUser } from "../controllers/users.controller.js";
import { computeHash } from "../controllers/compute.controller.js";

export async function router(req) {
  const url = new URL(req.url);

  if (url.pathname === "/ping") {
    if (req.method === "GET") {
      return Response.json({ message: "pong" });
    }

    return Response.json({ error: "method not allowed" }, { status: 405 });
  }

  if (url.pathname === "/items") {
    if (req.method === "GET") {
      return await getUsers();
    }

    if (req.method === "POST") {
      return await createUser(req);
    }

    return Response.json({ error: "method not allowed" }, { status: 405 });
  }

  if (url.pathname === "/compute") {
    if (req.method === "GET") {
      return Response.json(computeHash(url));
    }

    return Response.json({ error: "method not allowed" }, { status: 405 });
  }

  return Response.json({ error: "not found" }, { status: 404 });
}
