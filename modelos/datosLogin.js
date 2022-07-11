const query = require('express');
var mysql = require('mysql');
var conector=require("../utils/conector");

exports.getUserId=function(user, password, callback){
    
    var con = conector.conectar();
    con.connect();
    var sql="SELECT userId, password "+
            "FROM usuarios "+
            "WHERE user='"+user+"'";
    
    console.log(sql);
    var result=con.query(sql, function (err, result, fields){
        var id=result[0].userId
        if(result[0].password!=password){
            id="error";
        }
        callback(id);
    });
}



