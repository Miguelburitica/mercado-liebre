const express = require('express');
const router = express.Router();
const controller = require('../controllers/main.controller')

/* GET home page. */
router.get('/', controller.showHome);

/* GET register page. */
router.get('/register', controller.showRegister);

/* GET login page. */
router.get('/login', controller.showLogin);

module.exports = router;
