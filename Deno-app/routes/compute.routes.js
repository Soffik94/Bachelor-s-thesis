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
    const result = await computeHash(url);

    return Response.json(result);
  }

  return Response.json({ error: "method not allowed" }, { status: 405 });
}
