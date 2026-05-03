import { router } from "./routes/router.js";

Bun.serve({
  port: Number(process.env.PORT) || 3000,
  fetch(req) {
    return router(req);
  },
});
