var express = require('express');
var LOGIN = require('./login');

/**
 * Define las rutas que van 
 * @returns 
 */
exports.routerWithoutAuth = function () {
    var routerWithoutAuth=express.Router();

    routerWithoutAuth.post('/login', LOGIN.LOGIN);
    routerWithoutAuth.get('/login', LOGIN.LOGIN);
    routerWithoutAuth.get('/prueba', function (req, res) {
        console.log("pruebaaaaa");
        return res.status(200).send({ message: "Correcto" });
    })


    return routerWithoutAuth;
};