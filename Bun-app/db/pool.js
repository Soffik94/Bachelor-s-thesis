//nativní postgre driver - rozdíl proti deno a nodu
import { Client } from "bun:postgres";

export const client = new Client({
  hostname: "postgres",
  port: 5432,
  user: "user",
  password: "password",
  database: "mydb",
});
