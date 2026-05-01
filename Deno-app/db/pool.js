import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const pool = new Pool({
  hostname: Deno.env.get("DB_HOST"),
  port: Number(Deno.env.get("DB_PORT")),
  user: Deno.env.get("DB_USER"),
  password: Deno.env.get("DB_PASSWORD"),
  database: Deno.env.get("DB_NAME"),
}, 10);

//směřovač na deno_schema
export async function getClient() {
  const client = await pool.connect();

  await client.queryObject("SET search_path TO deno_schema");

  return client;
}

