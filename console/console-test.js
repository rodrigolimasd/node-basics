console.log('Show loging default')
console.error(new Error('Show error!!'))

const cars = ['GM','FIAT','FORD','BMW']

//table
console.table(cars)
const data = {name:'Rodrigo', carrer:'Software Engineer'}
console.table(data)

//count
console.count('process')
console.count('process')
console.count('process')
console.log('reset process')
//reset
console.countReset('process')
console.count('process')

//time
console.time('count')
for (let index = 0; index < 900000; index++) {}
console.timeEnd('count')

//assert
console.assert(true, 'True console asset')
console.assert(false, '%s work','dont')
//clear
//console.clear()