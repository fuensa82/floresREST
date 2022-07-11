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