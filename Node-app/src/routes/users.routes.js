const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');


router.post('/', usersController.createUser);

router.get('/', usersController.getUsers);

router.all('/', (req, res) => {
  res.status(405).json({ error: 'method not allowed' });
});

module.exports = router;
