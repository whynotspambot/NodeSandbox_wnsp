// Lesson 9
var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2)
var count = 0
var results = []
function processUrl(url, index) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) return console.error(err)
            results[index] = data.toString()
            count++
            if (count == 3) {
                for (var i = 0; i < 3; i++)
                    console.log(results[i])
            }
        }))
    }).on("error", console.error)
}

for (var i = 0; i < urls.length; i++) {
    processUrl(urls[i], i)
}