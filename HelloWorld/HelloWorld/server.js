// Lesson 12
var http = require('http')
var map = require('through2-map')

var portNumber = process.argv[2]
var filename = process.argv[3]

function listener(request, response) {
    // new connection received
    if (request.method == "POST")
    {
        // stream the content back as uppercase
        //request.pipe(map(function (chunk) {
        //        return chunk.toString().toUpperCase()
        //}))
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(response)
    }
}

var server = http.createServer(listener)
server.listen(portNumber)