
function sum(a, b, callback){
    return setTimeout(()=> {
        return callback(null, a + b);
    }, 3000)
}

// function write(){
//     console.log('Executing write function 👨‍💻', sum(1,2))
// }

// write()

function resolveSum(err, result){
    if(err) throw err;
    console.log(result)
}

sum(4,4, resolveSum)