var express = require('express');
var app = express();

app.get('/',function(solicitud,respuesta){
    respuesta.send('Página de inicio');
});

app.get('/contacto',function(solicitud,respuesta){
    respuesta.send('Página de contacto');
});

app.listen(3000);