const express = require('express');
const router = express.Router();
const computeController = require('../controllers/compute.controller');


router.get('/', computeController.computeHash);

router.all('/', (req, res) => {
  res.status(405).json({ error: 'method not allowed' });
});

module.exports = router;
