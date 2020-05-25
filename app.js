/*setTimeout(function(){
    console.log('Il a passé cinque secondes');
},5000);*/

/*
var time=0;
setInterval(function(){
    time+=3;
    console.log(time + ' segundos han pasado');
    switch(time){
        case 18:
            console.log('bye');
            break;
        default:
            break;
    }

},3000);
*/

/*
var time=0;
var temporizador = setInterval(function(){
    time+=2;
    console.log(time + ' segundos han pasado');
    if(time > 8){
        clearInterval(temporizador);
    }
},2000);
*/
console.log('Tu directorio es el siguiente:' + __dirname);
console.log('El archivo utilizado es el siguiente: '+ __filename);