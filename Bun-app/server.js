import { router } from "./routes/router.js";

Bun.serve({
  port: 3000,
  fetch(req) {
    return router(req);
  },
});
