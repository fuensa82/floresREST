var mysql = require('mysql');

function conectar(){
    var con = mysql.createConnection({
        host     : 'localhost',
        port     : '3306',
        user     : 'flores',
        password : 'flores',
        database : 'flores'
    });
    return con;
}
module.exports={
    conectar
}