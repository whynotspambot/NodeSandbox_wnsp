// Lesson 3
var fs = require('fs')

if (process.argv.length != 3)
{
    console.log("Error.")
    process.exit(1)
}

var path = process.argv[2]
var contents = fs.readFileSync(path, 'utf8')
console.log(contents.split('\n').length - 1)