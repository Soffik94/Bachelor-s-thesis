const express = require('express');
const usersRoutes = require('./routes/users.routes');

const app = express();

app.use(express.json());

// ping endpoint
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// users endpoints
app.use('/users', usersRoutes);

module.exports = app;
