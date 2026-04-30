//umělá hash fce pro vytížení 
export function computeHash(url) {
  const start = Date.now();

  const iterations = parseInt(url.searchParams.get("iterations")) || 100000;

  let hash = "test";

  for (let i = 0; i < iterations; i++) {
    const data = new TextEncoder().encode(hash);
    hash = crypto.subtle.digestSync("SHA-256", data);
    hash = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  const end = Date.now();

  return {
    message: "compute done",
    iterations,
    duration_ms: end - start,
    hash: hash.slice(0, 16),
  };
}
