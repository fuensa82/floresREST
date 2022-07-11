
// auth.js
var token = require("./token");
var DatosLogin = require("../modelos/datosLogin");



exports.LOGIN = function (req, res) {
  console.log("Login: "+req.query.user);
  var usuario=req.query.user;
  var pass=req.query.password;
  
  DatosLogin.getUserId(usuario, pass,function(id){
    console.log("usuario: "+id);
    if(id!="error"){
      return res.status(200).send({ token: token.createToken(id) });
    }else{
      return res.status(401).send({ message: "Usuario o contraseña incorrectos" });
    }
  });
  
};
exports.COMPROBAR = function (req, res,next) {
  console.log("Comprobando token de autenticacion");
  if(!comprobarToken(req, res)){
    return res.status(401).send({ message: "El token ha expirado" });
  }else{
    next();
  }
};

function comprobarToken(req, res){
  console.log("User: "+req.headers);
  if(req.query.user=="Victor"){
    return true;
  }else{
    return false;
  }
}
