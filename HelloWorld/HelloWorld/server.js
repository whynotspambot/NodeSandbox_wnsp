// Lesson 4
var fs = require('fs')

if (process.argv.length != 3)
{
    console.log("Error.")
    process.exit(1)
}

function callback(err, contents) {
    if (err) {
        console.log(err)
        process.exit(1)
    }

    console.log(contents.split('\n').length - 1)
}

var path = process.argv[2]
var contents = fs.readFile(path, 'utf8', callback)