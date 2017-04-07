// Lesson 10
var net = require('net')
var strftime = require('strftime')

var portNumber = process.argv[2]

function listener(socket) {
    // new connection received
    // send the time
    var timeString = strftime("%Y-%m-%d %H:%M\n", new Date())
    socket.end(timeString)
}

var server = net.createServer(listener)
server.listen(portNumber)

//console.log(strftime("%Y-%m-%d %H:%M", new Date()))