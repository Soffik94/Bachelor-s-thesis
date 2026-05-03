import { handleUsers } from "./users.routes.js";
import { handleCompute } from "./compute.routes.js";

export async function router(req) {
  const url = new URL(req.url);

  if (url.pathname === "/ping") {
    if (req.method === "GET") {
      return Response.json({ message: "pong" });
    }

    return Response.json({ error: "method not allowed" }, { status: 405 });
  }

  if (url.pathname === "/items") {
    return handleUsers(req);
  }

  if (url.pathname === "/compute") {
    return handleCompute(req);
  }

  return Response.json({ error: "not found" }, { status: 404 });
}
