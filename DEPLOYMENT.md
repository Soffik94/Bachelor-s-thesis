# Deployment

## Database

For the benchmark, prefer separate PostgreSQL schemas for each runtime:

- `node_schema`
- `deno_schema`
- `bun_schema`

Run this once on the database server:

```bash
psql -h 10.0.0.2 -p 5432 -U admin -d mydb -f db/runtime-schemas.sql
```

If you want to use the existing `public.users` table instead, set `DB_SCHEMA=public`
in all three application `.env` files. That is useful for smoke tests, but less clean
for benchmark isolation.

## Environment

Each app has its own `.env.example`. Copy it to `.env` inside the app directory and
fill in the real password on the server. Do not commit `.env` files.

The application containers listen on port `3000` internally. The current public port
mapping is:

- Node: host `3000` -> container `3000`
- Deno: host `3001` -> container `3000`
- Bun: host `3002` -> container `3000`

## Build And Run

From the repository root on the application server:

```bash
cd Node-app
cp .env.example .env
docker build -t node-app-image .
docker rm -f node-app-container || true
docker run -d --name node-app-container --env-file .env -p 3000:3000 node-app-image

cd ../Deno-app
cp .env.example .env
docker build -t deno-app-image .
docker rm -f deno-app-container || true
docker run -d --name deno-app-container --env-file .env -p 3001:3000 deno-app-image

cd ../Bun-app
cp .env.example .env
docker build -t bun-app-image .
docker rm -f bun-app-container || true
docker run -d --name bun-app-container --env-file .env -p 3002:3000 bun-app-image
```

## Smoke Tests

```bash
curl http://127.0.0.1:3000/ping
curl http://127.0.0.1:3001/ping
curl http://127.0.0.1:3002/ping

curl "http://127.0.0.1:3000/compute?iterations=10"
curl "http://127.0.0.1:3001/compute?iterations=10"
curl "http://127.0.0.1:3002/compute?iterations=10"

curl -X POST http://127.0.0.1:3000/items -H "Content-Type: application/json" -d '{"name":"Node","email":"node@example.com"}'
curl -X POST http://127.0.0.1:3001/items -H "Content-Type: application/json" -d '{"name":"Deno","email":"deno@example.com"}'
curl -X POST http://127.0.0.1:3002/items -H "Content-Type: application/json" -d '{"name":"Bun","email":"bun@example.com"}'

curl http://127.0.0.1:3000/items
curl http://127.0.0.1:3001/items
curl http://127.0.0.1:3002/items
```
