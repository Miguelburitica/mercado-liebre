const path = require('path');

const pathViews = function (nameView) {
    return path.resolve(__dirname, '../views/' + nameView + '.ejs');
};

controller = {
    showHome: function (req, res) {
        res.render(pathViews('home'));
    },
};

module.exports = controller;
