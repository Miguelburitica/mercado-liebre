const path = require('path');

const pathViews = function (nameView) {
    return path.resolve(__dirname, '../views/' + nameView + '.ejs');
};

const controller = {
    showLogin: function (req, res) {
        res.render(pathViews('login'));
    },

    showRegister: function (req, res) {
        res.render(pathViews('register'));
    },
};

module.exports = controller;
