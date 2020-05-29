var express = require('express');
var app = express();

app.set('view engine','ejs');   
app.get('/',function(solicitud,respuesta){
    respuesta.sendFile(__dirname+'/index.html');
});
app.get('/contacto',function(solicitud,respuesta){
    respuesta.sendFile(__dirname+'/contacto.html');
});
app.get('/perfil/:nombre',function(solicitud,respuesta){
    var data = {edad:29, trabajo:'developer', hobbies:['comer','jugar x box','tomar']};
    respuesta.render('perfil',{persona:solicitud.params.nombre, data:data});
});
app.listen(3000);