const path = require('path');



const pathViews = function (nameView) {
    return "../views/" + nameView + ".html"; 
}

const controller = {

    showHome : function (req, res) {
        res.sendFile(path.resolve(__dirname, pathViews("home")))
    },

    showLogin : function (req, res) {
        res.sendFile(path.resolve(__dirname, pathViews("login")))
    },

    showRegister : function (req, res) {
        res.sendFile(path.resolve(__dirname, pathViews("register")))
    },

}

module.exports = controller;





