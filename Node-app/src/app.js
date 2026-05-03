const express = require('express');
const usersRoutes = require('./routes/users.routes');
const computeRoutes = require('./routes/compute.routes');

const app = express();

app.disable('x-powered-by');
app.set('etag', false);
app.use(express.json());

const methodNotAllowed = (req, res) => {
  res.status(405).json({ error: 'method not allowed' });
};

// ping endpoint
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});
app.all('/ping', methodNotAllowed);

// database benchmark endpoints
app.use('/items', usersRoutes);

//compute
app.use('/compute', computeRoutes);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'invalid json' });
  }

  next(err);
});

app.use((req, res) => {
  res.status(404).json({ error: 'not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'internal error' });
});

module.exports = app;
