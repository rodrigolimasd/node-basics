const { writeFile } = require('fs')

writeFile("file-gen.txt", "Creating file",(err)=>{
    if(err) throw err
    console.log("file created with success")
})