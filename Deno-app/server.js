import "https://deno.land/std@0.224.0/dotenv/load.ts";
import app from "./app.js";

const PORT = Deno.env.get("PORT") || 3000;

Deno.serve({ port: Number(PORT) }, app);
