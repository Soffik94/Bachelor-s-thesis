const { Pool } = require('pg');

const dbSchema = process.env.DB_SCHEMA || 'node_schema';
const poolMax = Number(process.env.DB_POOL_MAX) || 30;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: poolMax
});

pool.on('connect', async (client) => {
  await client.query("SELECT set_config('search_path', $1, false)", [`${dbSchema},public`]);
});

module.exports = pool;
