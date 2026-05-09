import { handleUsers } from "./users.routes.js";
import { handleCompute } from "./compute.routes.js";

const routes = new Map([
  ["GET /ping", () => Response.json({ message: "pong" })],
  ["GET /items", handleUsers],
  ["POST /items", handleUsers],
  ["GET /compute", handleCompute],
]);

const routedPaths = new Set(["/ping", "/items", "/compute"]);

export async function router(req) {
  const url = new URL(req.url);
  const handler = routes.get(`${req.method} ${url.pathname}`);

  if (handler) {
    return await handler(req);
  }

  if (routedPaths.has(url.pathname)) {
    return Response.json({ error: "method not allowed" }, { status: 405 });
  }

  return Response.json({ error: "not found" }, { status: 404 });
}
