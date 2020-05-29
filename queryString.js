var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodeParser = bodyParser.urlencoded({extended:false});
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.get('/',function(solicitud,respuesta){
    respuesta.render('index');
});
app.get('/contacto',function(solicitud,respuesta){
    //console.log(solicitud.query);
    respuesta.render('contacto',{qs:solicitud.query});
});


app.post('/contacto',urlencodeParser,function(solicitud,respuesta){
    //console.log(solicitud.query);
    console.log(solicitud.body);
    respuesta.render('contacto-exitoso',{data:solicitud.body});
});
app.get('/perfil/:nombre',function(solicitud,respuesta){
    var data = {trabajo:'desarrollador',edad:27,hobbies:['caminar','manejar','tomar']};
    respuesta.render('perfil',{persona:solicitud.params.nombre,data:data});
});
app.listen(8000);