import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const dbSchema = Deno.env.get("DB_SCHEMA") || "deno_schema";
const poolSize = Number(Deno.env.get("DB_POOL_MAX")) || 30;

const pool = new Pool({
  hostname: Deno.env.get("DB_HOST"),
  port: Number(Deno.env.get("DB_PORT")),
  user: Deno.env.get("DB_USER"),
  password: Deno.env.get("DB_PASSWORD"),
  database: Deno.env.get("DB_NAME"),
}, poolSize);

export async function getClient() {
  const client = await pool.connect();

  await client.queryObject("SELECT set_config('search_path', $1, false)", [
    `${dbSchema},public`,
  ]);

  return client;
}

