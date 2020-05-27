/*var http = require('http');
var fs = require('fs');
var servidor = http.createServer(function(solicitud,respuesta){
    console.log('solicitud hecha desde: '+solicitud.url);
    respuesta.writeHead(200,{'Content-Type':'text/plain'});
    respuesta.end('I need to drink beers');
});
servidor.listen(2000,'127.0.0.1');
console.log('Escuchando en el puerto 20000');*/
var http = require('http');
var fs = require('fs');
var servidor = http.createServer(function(solicitud,respuesta){
    console.log('solicitud hecha desde: '+solicitud.url);
    if(solicitud.url === '/home' || solicitud.url ==='/'){
        respuesta.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(respuesta);
    }
    else if(solicitud.url ==='/contacto'){
        respuesta.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contacto.html').pipe(respuesta);

    }
    else if(solicitud.url ==='/api/mondtec'){
        var socios = [{nombre:'Oswaldo',edad:27},{nombre:'Conrado',edad:29},{nombre:'Martin',edad:30}];
        respuesta.writeHead(200,{'Content-Type':'application/json'});
        respuesta.end(JSON.stringify(socios));
    }else{
        respuesta.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(respuesta);
    }
});
servidor.listen(50000,'127.0.0.1');
console.log('corriendo en puerto 50000');