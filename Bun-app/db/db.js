import postgres from 'postgres';

export const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  username: 'user',
  password: 'password',
});
