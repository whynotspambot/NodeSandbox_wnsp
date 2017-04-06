// Lesson 5
var fs = require('fs')
var path = require('path')

if (process.argv.length != 4){
    console.log("Error.")
    process.exit(1)
}

var directory = process.argv[2]
var fileExtensionFilter = '.' + process.argv[3]
fs.readdir(directory, function callback(err, files) {
    if (err) {
        return console.log(err)
    }
    for (var i = 0; i < files.length; i++) {
        if (path.extname(files[i]) == fileExtensionFilter) {
            console.log(files[i])
        }
    }
})