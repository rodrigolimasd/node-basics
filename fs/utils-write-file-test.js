const {promisify} = require('util')

const writeFile = promisify(require('fs').writeFile)
const content = 'creating file using promisify native module node'

writeFile('util-file-gen.txt', content)
    .then(() => console.log('success'))
        .catch(err => console.log(err))