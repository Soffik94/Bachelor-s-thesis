function parseIterations(value) {
  const iterations = Number(value);
  return Number.isSafeInteger(iterations) && iterations > 0 ? iterations : 100000;
}

function computeWork(iterations) {
  let a = 0x9e3779b9 >>> 0;
  let b = 0x85ebca6b >>> 0;
  let c = 0xc2b2ae35 >>> 0;
  let acc = 0x27d4eb2f >>> 0;

  for (let i = 0; i < iterations; i++) {
    a = Math.imul(a ^ (a >>> 15), 0x2c1b3c6d) >>> 0;
    b = Math.imul((b + a + i) >>> 0, 0x297a2d39) >>> 0;
    c = (c ^ (b >>> 13) ^ Math.imul(i + 1, 0x165667b1)) >>> 0;

    acc = Math.imul((acc ^ a ^ b ^ c) >>> 0, 0x9e3779b1) >>> 0;
    acc = ((acc << 13) | (acc >>> 19)) >>> 0;
  }

  return acc.toString(16).padStart(8, "0");
}

export function computeHash(url) {
  const start = Date.now();
  const iterations = parseIterations(url.searchParams.get("iterations"));
  const hash = computeWork(iterations);
  const end = Date.now();

  return {
    message: "compute done",
    iterations,
    duration_ms: end - start,
    hash,
  };
}
