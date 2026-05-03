CREATE SCHEMA IF NOT EXISTS node_schema;
CREATE SCHEMA IF NOT EXISTS bun_schema;
CREATE SCHEMA IF NOT EXISTS deno_schema;

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

GRANT USAGE ON SCHEMA node_schema, bun_schema, deno_schema TO admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA node_schema, bun_schema, deno_schema TO admin;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA node_schema, bun_schema, deno_schema TO admin;
