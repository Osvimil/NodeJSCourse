/*
function suma(){
    var uno=220;
    var dos=10;
    var res = parseInt(uno)+parseInt(dos);
    console.log('El resultado es: '+res );
}
suma();
*/

/*
var resta = function(){
    var uno=100;
    var dos=80;
    var res = parseInt(uno)-parseInt(dos);
    console.log('Resultado de la resta: '+ res);
}
resta();
*/
function llamadaMisma(fun){
    fun();
}

var saludo = function(){
    console.log("Salut mes amis j'adore le francais et l'anglais");
} 

llamadaMisma(saludo);