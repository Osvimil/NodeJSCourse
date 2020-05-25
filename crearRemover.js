var fs = require('fs');
/*
fs.mkdir('cosas',(err)=>{});
*/


/*
fs.rmdir('cosas',(err)=>{})
*/

/*
fs.mkdir('stuff',function(){
    fs.readFile('texto.txt','utf8',function(err,data){
        fs.writeFile('./stuff/escribir.txt',data,(err)=>{});
    });
});
*/
fs.unlink('./stuff/escribir.txt',function(){
    fs.rmdir('stuff',(err)=>{});
});
