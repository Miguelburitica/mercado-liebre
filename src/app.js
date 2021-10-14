const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');

app.use('/', indexRouter)

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
