import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

const pool = new Pool({
  hostname: Deno.env.get("DB_HOST"),
  port: Number(Deno.env.get("DB_PORT")),
  user: Deno.env.get("DB_USER"),
  password: Deno.env.get("DB_PASSWORD"),
  database: Deno.env.get("DB_NAME"),
}, 10); 



export default pool;

