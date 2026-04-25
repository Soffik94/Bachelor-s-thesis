const express = require('express');
const usersRoutes = require('./routes/users.routes');
const client = require('prom-client');
const computeRoutes = require('./routes/compute.routes');

const app = express();

app.use(express.json());

// ping endpoint
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// users endpoints
app.use('/users', usersRoutes);

//compute
app.use('/compute', computeRoutes);

// inicializace defaultních metrik (CPU, paměť, event loop lag)
client.collectDefaultMetrics();

// prometheus export
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
})

module.exports = app;
