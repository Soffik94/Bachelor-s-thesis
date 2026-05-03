const { Pool } = require('pg');

const dbSchema = process.env.DB_SCHEMA || 'node_schema';
const poolMax = Number(process.env.DB_POOL_MAX) || 30;

const quoteIdent = (identifier) => {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(identifier)) {
    throw new Error(`Invalid database identifier: ${identifier}`);
  }

  return `"${identifier}"`;
};

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: poolMax,
  options: `-c search_path=${dbSchema},public`
});

module.exports = {
  pool,
  usersTable: `${quoteIdent(dbSchema)}.${quoteIdent('users')}`
};
