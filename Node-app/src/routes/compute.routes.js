const express = require('express');
const router = express.Router();
const computeController = require('../controllers/compute.controller');


router.get('/', computeController.computeHash);

module.exports = router;
