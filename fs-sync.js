const fs = require("fs")

console.log((process.hrtime()[0]/60).toFixed(5))
console.log('Executing console before read file')

const data = fs.readFileSync("file.txt")

console.log('Executing console after read file')

console.log((process.hrtime()[0]/60).toFixed(5))