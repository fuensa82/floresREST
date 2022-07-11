const { query } = require('express');
var mysql = require('mysql');
var conector=require("../utils/conector");

function getListaComposiciones(req,res){
    
    var con = conector.conectar();
    con.connect();
    var sql="SELECT composiciones.idComposicion,composiciones.Nombre as nombreComp,Observaciones,flores.idFlor,idFamilia,flores.Nombre as nombreFlor,Duracion,Color,CantMinima,CantidadAlmacen, florescomposicion.Cantidad "+
            "FROM composiciones,florescomposicion,flores "+
            "WHERE composiciones.idComposicion=florescomposicion.idComposicion AND "+
            "florescomposicion.idFlor=flores.idFlor";
    if(req.query.query){
        sql="select * from clientes where nombre like '%"+req.query.query+"%' or apellidos like '%"+req.query.query+"%'";
    }
    console.log(sql);
    var result=con.query(sql, function (err, result, fields){
        var newResult=new Array();
        var ant="";
        result.forEach(element => {
            if(ant!=element.idComposicion){
                newResult.push({
                    idComposicion:element.idComposicion,
                    nombreComp:element.nombreComp,
                    flores:new Array()
                });
            }
            newResult[newResult.length-1].flores.push({
                idFlor:element.idFlor,
                nombreFlor:element.nombreFlor,
                cantidad:element.Cantidad
            });
            ant=element.idComposicion;
            
        });
        return res.json({newResult});
    });
}

function getComposicion(id,res){
    var con = conectar();
    con.connect();
    var sql="select * from clientes where id='"+id+"'";// where nombreCorto='"+profesor.nombreCorto+"'";
    var result=con.query(sql, function (err, result, fields){
        return res.json({result});
    });
    
}

module.exports={
    getListaComposiciones,
    getComposicion
}