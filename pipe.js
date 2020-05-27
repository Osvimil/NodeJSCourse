
/*var http = require('http');
var fs = require('fs');

var leible = fs.createReadStream(__dirname+'/leer.txt','utf8');
var escribible = fs.createWriteStream(__dirname+'/escribir.txt');

leible.pipe(escribible);*/

var http = require('http');
var fs = require('fs');
var server = http.createServer(function(solicitud,respuesta){
    console.log('solicitud fue hecha desde: '+solicitud.url);
    respuesta.writeHead(200,{'Content-Type': 'text/plain'});
    var leible = fs.createReadStream(__dirname+'/leer.txt','utf8');
    leible.pipe(respuesta);
});
server.listen(3000,'127.0.01');
console.log('se escucha en el puerto 3000');
