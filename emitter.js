/*
var events = require('events');
var myEmitter = new events.EventEmitter();
 myEmitter.on('algunEvento',function(mensaje){
    console.log(mensaje);
 });
 myEmitter.emit('algunEvento','El evento fue emitido');
 */
 var events = require('events');
 var util = require('util');
 var Person = function(name){
     this.name = name;
 };
util.inherits(Person,events.EventEmitter);
var oswaldo = new Person('Oswaldo');
var lupe = new Person('Guadalupe');
var alfonso = new Person('Alfonso');
var familia = [oswaldo,lupe,alfonso];

familia.forEach(function(person){
    person.on('speak',function(mensaje){
        console.log(person.name + ' dijo: ' + mensaje);
    });
});
oswaldo.emit('speak','Qué onda');
lupe.emit('speak','Cómo están');
alfonso.emit('speak','Cómo andan todos');
