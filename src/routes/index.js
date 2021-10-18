const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/home.html"))
});

/* GET register page. */
router.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/register.html"))
});

module.exports = router;
