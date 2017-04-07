// Lesson 9
var http = require('http')
var bl = require('bl')
var async = require('async')

function processUrl(url, callback) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) return console.error(err)
            callback(null, data.toString())
        }))
    }).on("error", console.error)
}

async.map(process.argv.slice(2), processUrl, function (err, results) {
    for (var i = 0; i < results.length; i++)
        console.log(results[i])
})

//for (var i = 0; i < urls.length; i++) {
//    processUrl(urls[i], i)
//}
//var fs = require('fs')
//var async = require('async')
//function readF(filename, callback) {
//    callback(null, 'hello')
//}

//async.map(['server.js', 'directoryFilter.js', 'package.json'], readF, function (err, results) {
//    console.log('hello')
//    for (var i = 0; i < results.length; i++) {
//        console.log('hi')
//        console.log(results[i])
//    }
//})