/*vrací JSON:{
  "message": "compute done",
  "iterations": 100000,
  "duration_ms": 120,
  "hash": "a1b2c3d4e5f6..."
} -> údaje o jednom proběhnutí compute*/

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
