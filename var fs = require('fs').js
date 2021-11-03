var fs = require('fs')
console.log("\n Abriendo archivo...")
var content = fs.readFile("archivo.txt","utf8", function(error,content){
    console.log(content)
})

console.log("\n Haciendo otra cosa")
console.log(process.uptime())