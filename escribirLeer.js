var fs = require('fs');
/* Sincrono
var leeme = fs.readFileSync('texto.txt','utf8');
//console.log(leeme);

fs.writeFileSync('escribe.txt',leeme);
*/

/*
fs.readFile('texto.txt','utf8',function(err,data){
    //console.log(data);
    fs.writeFile('escribe.txt', data, (err)=>{});
});*/

fs.unlink('escribe.txt', (err)=>{});