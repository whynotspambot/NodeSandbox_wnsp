// Lesson 11
var http = require('http')
var fs = require('fs')

var portNumber = process.argv[2]
var filename = process.argv[3]

function listener(request, response) {
    // new connection received
    // stream the file as the response
    response.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(filename).pipe(response)
}

var server = http.createServer(listener)
server.listen(portNumber)