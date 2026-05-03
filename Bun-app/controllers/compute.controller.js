export function computeHash(url) {
  const start = Date.now();
  const iterations = parseInt(url.searchParams.get("iterations"), 10) || 100000;

  let hash = "test";

  for (let i = 0; i < iterations; i++) {
    const hasher = new Bun.CryptoHasher("sha256");
    hasher.update(hash);
    hash = hasher.digest("hex");
  }

  const end = Date.now();

  return {
    message: "compute done",
    iterations,
    duration_ms: end - start,
    hash: hash.slice(0, 16),
  };
}
