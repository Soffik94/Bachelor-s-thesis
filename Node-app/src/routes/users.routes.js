const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

// POST /users
router.post('/', usersController.createUser);

// GET /users
router.get('/', usersController.getUsers);

module.exports = router;
