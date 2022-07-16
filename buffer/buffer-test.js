const Buffer = require('buffer').Buffer

const buf = Buffer.from('wellcome to nodejs')

console.log(buf)
console.log(buf.toString('utf16le'))

const buf2 = Buffer.from('wellcome to nodejs with tests')
console.log(buf2.toString())
console.log(buf2.toString('utf-8', 0, 8))
console.log(Buffer.isBuffer(buf2))