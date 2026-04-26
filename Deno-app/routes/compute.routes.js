import { computeHash } from "../controllers/compute.controller.js";

export async function handleCompute(req) {
  const url = new URL(req.url);

  if (req.method === "GET") {
    const result = computeHash(url);

    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Method Not Allowed", { status: 405 });
}