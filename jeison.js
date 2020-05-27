var http = require('http');
var fs = require('fs');
var servidor = http.createServer(function(solicitud,respuesta){
    console.log('solicitud hecha desde: '+solicitud.url);
    respuesta.writeHead(200,{'Content-Type':'application/json'});
    var datos = {
        nombre:'Oswaldo',
        apellidos:'Peralta Saldivar',
        edad:'27' 
    };
respuesta.end(JSON.stringify(datos));
});
servidor.listen(7000,'127.0.0.1');
console.log('ejecutando en el puerto 7000');