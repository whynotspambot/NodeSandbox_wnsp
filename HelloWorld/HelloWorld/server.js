// Lesson 6
var df = require('./directoryFilter')

if (process.argv.length != 4){
    console.log("Error.")
    process.exit(1)
}

var directory = process.argv[2]
var fileExtensionFilter = '.' + process.argv[3]
df(process.argv[2], process.argv[3], function (err, files) {
    if (err) {
        return console.log(err)
    }
    files.forEach(function (file) { console.log(file) })
})