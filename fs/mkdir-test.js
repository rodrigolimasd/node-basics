const fs = require('fs')
const assets = ['css','js','images','fonts','lib']

function make(dir){
    dir.forEach((item) => {
        fs.mkdir(`project/assets/${item}`,{recursive: true},(err)=> {
            if(err) throw err
            console.log('Dir created with success:', item)
        })
    });
}

make(assets)

// fs.mkdir('generations-dir',(err)=>{
//     if(err) throw err
//     console.log('dir created with success')
// })

// fs.mkdir('tree-dir/p1/subp1',{recursive: true}, (err)=>{
//     if(err) throw err
//     console.log('dir created with success')
// })