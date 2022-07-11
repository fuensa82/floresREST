var express = require('express');
var clientes=require("../modelos/clientes");
var composiciones=require("../modelos/composiciones");
var LOGIN=require("./login");

/**
 * Define las rutas que van 
 * @returns 
 */
exports.routerAuth=function(){
    var routerAuth = express.Router();
    routerAuth.use(LOGIN.COMPROBAR);
    
    routerAuth.get("/composiciones",composiciones.getListaComposiciones);

    return routerAuth;
};