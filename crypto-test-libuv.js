const crypto = require("crypto");
const start = Date.now();

function logHashTime(){
    crypto.pbkdf2("a","b", 100000, 512, "sha512",()=>{
        console.log(`Hash: ${Date.now() - start}`)
    })
}

//4 multithread with libuv
logHashTime()
logHashTime()
logHashTime()
logHashTime()
//5
logHashTime()