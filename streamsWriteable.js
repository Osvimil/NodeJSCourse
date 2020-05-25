var http = require('http');
var fs = require('fs');

var myreadStream = fs.createReadStream(__dirname + '/leer.txt','utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/escribir.txt','utf8');

myreadStream.on('data',function(chunk){
    console.log('new chunk received');
    mywriteStream.write(chunk);
});