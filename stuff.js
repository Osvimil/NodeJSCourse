/* Primera forma
var counter = function(arreglo){
    return 'Hay '+ arreglo.length + ' elementos en el arreglo';
}
var adder = function(a,b){
    return `La suma de dos numeros es ${a+b}`;
}
var pi=3.1416;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/

/* Segunda forma
module.exports.counter = function(arreglo){
    return 'Hay '+ arreglo.length + ' elementos en el arreglo';
}
module.exports.adder = function(a,b){
    return `La suma de dos numeros es ${a+b}`;
}
module.exports.pi=3.1416;
*/

var counter = function(arreglo){
    return 'Hay '+ arreglo.length + ' elementos en el arreglo';
}
var adder = function(a,b){
    return `La suma de dos numeros es ${a+b}`;
}
var pi=3.1416;
module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
}