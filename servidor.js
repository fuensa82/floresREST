//node
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var morgan=require('morgan');
var RouterAuth = require('./utils/routerAuth');
var RouterWithoutAuth = require('./utils/routerWithoutAuth');

//Definimos los manejadores de las peticiones con login y sin el
var routerAuth=RouterAuth.routerAuth();
var routerWithoutAuth=RouterWithoutAuth.routerWithoutAuth();
app.use(routerWithoutAuth);
app.use(routerAuth);


//Configuraciones
app.set('port', 4321);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});