var http = require('http');
var fs = require('fs');
var servidor = http.createServer(function(solicitud,respuesta){
    console.log('solicitud hecha desde: '+solicitud.url);
    respuesta.writeHead(200,{'Content-Type':'text/html'});
    var leible = fs.createReadStream(__dirname+'/index.html','utf8');
    leible.pipe(respuesta);
});
servidor.listen(5000,'127.0.0.1');
console.log('Se está escuchando en el puerto 5000');