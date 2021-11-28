const express = require('express');
const path = require('path');
const app = express();
const Router = require(path.resolve(__dirname, './routes'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/', Router);

module.exports = app;
