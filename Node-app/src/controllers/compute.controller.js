const crypto = require('crypto');

exports.computeHash = (req, res) => {
  const start = Date.now();

  // kolikrát hashovat (lze řídit query parametrem)
  const iterations = parseInt(req.query.iterations) || 100000;

  let hash = 'test';

  for (let i = 0; i < iterations; i++) {
    hash = crypto.createHash('sha256').update(hash).digest('hex');
  }

  const end = Date.now();

  res.json({
    message: 'compute done',
    iterations,
    duration_ms: end - start,
    hash: hash.slice(0, 16)
  });
};
