import { handleUsers } from "./users.routes.js";
import { handleCompute } from "./compute.routes.js";

export async function router(req) {
  const url = new URL(req.url);

  if (url.pathname === "/ping") {
    return new Response(JSON.stringify({ message: "pong" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (url.pathname.startsWith("/users")) {
    return handleUsers(req);
  }

  if (url.pathname.startsWith("/compute")) {
    return handleCompute(req);
  }

  if (url.pathname === "/metrics") {
    return new Response("metrics not implemented", { status: 200 });
  }

  return new Response("Not Found", { status: 404 });
}