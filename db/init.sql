DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'benchmark') THEN
    CREATE ROLE benchmark LOGIN PASSWORD 'benchmark';
  ELSE
    ALTER ROLE benchmark WITH LOGIN PASSWORD 'benchmark';
  END IF;
END
$$;

SELECT 'CREATE DATABASE benchmark OWNER benchmark'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'benchmark')\gexec

\connect benchmark

CREATE SCHEMA IF NOT EXISTS node_schema AUTHORIZATION benchmark;
CREATE SCHEMA IF NOT EXISTS bun_schema AUTHORIZATION benchmark;
CREATE SCHEMA IF NOT EXISTS deno_schema AUTHORIZATION benchmark;

CREATE TABLE IF NOT EXISTS node_schema.users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS bun_schema.users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS deno_schema.users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

GRANT USAGE ON SCHEMA node_schema, bun_schema, deno_schema TO benchmark;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA node_schema, bun_schema, deno_schema TO benchmark;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA node_schema, bun_schema, deno_schema TO benchmark;
