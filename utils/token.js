// token.js
var jwt = require("jwt-simple");
var moment = require("moment");
var config = require("./config");

exports.createToken = function (user) {
  var payload = {
    sub: user,
    iat: moment().unix(),
    exp: moment().add(2, "days").unix(),
  };
  console.log(payload);
  return jwt.encode(payload, config.TOKEN_SECRET);
};
/**
 * Genera error si no es valido el token. Si es válido devuelve el id del usuario
 */

exports.comprobarToken = function(req, res){
  console.log("User: "+req.header('auth-token'));
  var token=req.header('auth-token');
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: "El token ha expirado" });
  }

  return payload.sub;
};