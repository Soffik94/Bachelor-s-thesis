const express = require('express');
const router = express.Router();
const computeController = require('../controllers/compute.controller');

// GET /compute
router.get('/', computeController.computeHash);

module.exports = router;
