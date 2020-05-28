var express = require('express');
var app = express();
app.get('/',function(solicitud,respuesta){
    respuesta.send('Página de inicio');
});
app.get('/contacto',function(solicitud,respuesta){
    respuesta.send('Página de contacto de la empresa');
});
app.get('/perfil/:id',function(solicitud,respuesta){
    respuesta.send('Se solicitó ver el perfil con el id: '+solicitud.params.id);
});
app.listen(4000);