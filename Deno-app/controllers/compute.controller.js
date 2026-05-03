//umělá hash fce pro vytížení 
export async function computeHash(url) {
  const start = Date.now();

  const iterations = parseInt(url.searchParams.get("iterations"), 10) || 100000;

  let hash = "test";
  const encoder = new TextEncoder();

  for (let i = 0; i < iterations; i++) {
    const data = encoder.encode(hash);
    const digest = await crypto.subtle.digest("SHA-256", data);
    hash = Array.from(new Uint8Array(digest))
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
