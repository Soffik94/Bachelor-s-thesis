import app from "./app.js";
import "https://deno.land/std@0.224.0/dotenv/load.ts";

const PORT = Deno.env.get("PORT") || 3000;

Deno.serve({ port: Number(PORT) }, app);
