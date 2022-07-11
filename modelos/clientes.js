const { query } = require('express');
var mysql = require('mysql');

function getListaClientes(req,res){
    
    var con = conectar();
    con.connect();
    var sql="select * from clientes";// where nombreCorto='"+profesor.nombreCorto+"'";
    if(req.query.query){
        sql="select * from clientes where nombre like '%"+req.query.query+"%' or apellidos like '%"+req.query.query+"%'";
    }
    console.log(sql);
    var result=con.query(sql, function (err, result, fields){
        return res.json({result});
    });
    
}

function getCliente(id,res){
    var con = conectar();
    con.connect();
    var sql="select * from clientes where id='"+id+"'";// where nombreCorto='"+profesor.nombreCorto+"'";
    var result=con.query(sql, function (err, result, fields){
        return res.json({result});
    });
    
}

function getUsuario(req,res){

}
function crearUsuario(req,res){

}

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
    getListaClientes,
    getCliente,
    getUsuario,
    crearUsuario
}