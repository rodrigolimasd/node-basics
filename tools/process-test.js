console.log(`File name: `, __filename)
console.log(`Dir name: `, __dirname)
console.log(`Dir name: `, process.cwd())
console.log(`Params executing: `, process.argv)
switch(process.argv[2]){
    case '-a':
        console.log('Executing main routine')
        break
    case '-i':
        console.log('Executing install')
        break
    case '-q':
        console.log('Quit application')
        process.exit()
        break;
    default :
        console.log('No param')
}
console.log(`Env from server: `, process.platform )

console.log(`Params executing: `, process.env)