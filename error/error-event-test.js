const { EventEmitter } = require('events')
const emitter = new EventEmitter()

const validObj = (a) => {
    if(typeof a != 'object'){
        emitter.emit('error', new Error('Erro object'))
    } else {
        console.log('valid obj')
    }
}

emitter.addListener('error', (err)=>{
    console.log('Event: '+err.message)
})

let data = { name: 'Test', other: 'test'}

validObj(data)

