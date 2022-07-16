const fs = require("fs")

console.log((process.hrtime()[0]/60).toFixed(5))
console.log('Executing console before read file')

const data = fs.readFile("file.txt", (err, data)=>{
    if(err) throw err;
    console.log('Finish read file')
})

console.log('Executing console after read file')

console.log((process.hrtime()[0]/60).toFixed(5))