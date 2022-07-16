console.log('Using module-01.js')

const hide = () => {
    console.log('Running hide func')
}

exec = () => {
    console.log('Running func exec')
}
welcome = 'Welcome to module-01.js'

module.exports = {exec, welcome}

//REPL
//use node on console
//require("./module-01")
//.exit