const path = require('path')

console.log(path.basename('../file.txt'))
console.log(path.normalize('c:\\temp/dir//subdir/dir/..'))
console.log(path.join('/test','/test2','/test3/test4','dir2','..'))
console.log(path.resolve('path-test.js'))
console.log(path.extname('path-test.js'))