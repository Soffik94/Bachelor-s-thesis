const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 30
});

pool.on('connect', async (client) => {
  await client.query('SET search_path TO node_schema');
});

module.exports = pool;
