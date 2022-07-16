
function sum(a, b, callback){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(a + b);
        }, 3000)
    })
}

sum(4,4)
.then((result) => {
    console.log(`Result: ${result}`)
})