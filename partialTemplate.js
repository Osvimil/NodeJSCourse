var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
/*app.use('/assets',function(solicitud,respuesta,next){
    console.log(solicitud.url);
    next();
});*/
app.get('/',function(solicitud,respuesta){
    respuesta.render('index');
});
app.get('/contacto',function(solicitud,respuesta){
    respuesta.render('contacto');
});
app.get('/perfil/:nombre',function(solicitud,respuesta){
    var data = {edad:27, trabajo:'developer',hobbies:['comer','coger','programar']};
    respuesta.render('perfil',{persona:solicitud.params.nombre,data:data});
});
app.listen(4000);