const express = require('express');
const router = express.Router();
const path = require('path');

const { userController } = require(path.resolve(__dirname, '../controllers'));

/* GET register page. */
router.get('/register', userController.showRegister);

/* GET login page. */
router.get('/login', userController.showLogin);

module.exports = router;
