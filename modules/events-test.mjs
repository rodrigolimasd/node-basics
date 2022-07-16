//node v12
import {EventEmitter} from 'events'

class EventTest extends EventEmitter {}
const myEvent = new EventTest()

myEvent.on('security', (x,y) => {
    console.log(`Executing event 'security': ${x} ${y}`)
})

myEvent.emit('security', 'root','access site uol.com')