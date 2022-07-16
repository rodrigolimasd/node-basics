const fs = require("fs")

//non bloking
fs.readFile("file.txt", (err, data)=>{
    if(err) throw err;
    console.log('Non bloking read file', data)
})

//blocking
const text = fs.readFileSync('file.txt')

console.log(`Bloking read file: ${text}`)