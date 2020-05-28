var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(solicitud,respuesta){
    respuesta.sendFile(__dirname+'/index.html');
});
app.get('/contacto',function(solicitud,respuesta){
    respuesta.sendFile(__dirname+'/contacto.html');
});
app.get('/perfil/:name',function(solicitud,respuesta){
    var data = {edad:27, trabajo:'developer'};
    //respuesta.send('Estas viendo el perfil de: '+solicitud.params.nombre);
    respuesta.render('perfil',{persona:solicitud.params.name,data:data});
});
app.listen(7000);