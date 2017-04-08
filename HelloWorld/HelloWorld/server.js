// Lesson 13
// edit
var http = require('http')
var url = require('url')

var portNumber = process.argv[2]
var filename = process.argv[3]

function listener(request, response) {
    // new connection received
    if (request.method == "GET")
    {
        // parse url
        var urlstruct = url.parse(request.url, true)
        if (urlstruct.pathname == '/api/parsetime') {
            response.writeHead(200, { 'Content-Type': 'application/json' })
            var date = new Date(urlstruct.query.iso)
            var data = {}
            data.hour = date.getHours()
            data.minute = date.getMinutes()
            data.second = date.getSeconds()
            response.end(JSON.stringify(data))
        }
        else if (urlstruct.pathname == '/api/unixtime')
        {
            response.writeHead(200, { 'Content-Type': 'application/json' })
            var date = new Date(urlstruct.query.iso)
            var data = {}
            data.unixtime = Math.floor(date.getTime())
            response.end(JSON.stringify(data))
        }
        else {
            response.end('Unknown route')
        }
    }
}

var server = http.createServer(listener)
server.listen(portNumber)