// Lesson 8
var http = require('http')
var bl = require('bl')

var url = process.argv[2]
var charCount = 0
var completeData = ''
http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) return console.error(err)
        var completeData = data.toString()
        console.log(completeData.length)
        console.log(completeData)
    }))
}).on("error", console.error)