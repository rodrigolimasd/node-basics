console.log('Using module-01.js')

const hide = () => {
    console.log('Running hide func')
}

module.exports.exec = () => {
    console.log('Running func exec')
}
module.exports.welcome = 'Welcome to module-01.js'

//REPL
//use node on console
//require("./module-01")
//.exit