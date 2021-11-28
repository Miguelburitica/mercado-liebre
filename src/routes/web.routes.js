const express = require('express');
const router = express.Router();
const path = require('path');

const { webController } = require(path.resolve(__dirname, '../controllers'));

/* GET home page. */
router.get('/', controller.showHome);

module.exports = router;
