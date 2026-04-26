import { router } from "./routes/router.js";

export default async function handler(req) {
  return router(req);
}