import { SQL } from "bun";

export const dbSchema = process.env.DB_SCHEMA || "bun_schema";
const poolMax = Number(process.env.DB_POOL_MAX) || 30;

export const sql = new SQL({
  hostname: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: poolMax,
});

let usersTable;

export async function getUsersTable() {
  if (usersTable) {
    return usersTable;
  }

  const qualifiedTable = `${dbSchema}.users`;
  const [result] = await sql`
    SELECT to_regclass(${qualifiedTable}) IS NOT NULL AS exists
  `;

  usersTable = result.exists ? qualifiedTable : "public.users";
  return usersTable;
}
