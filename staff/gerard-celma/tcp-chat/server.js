const net = require('net')

const port = 8081

let server = net.createServer(socket => {

    socket.on('connect', function() {
    })
    socket.on('data', (message) => {
        console.log(message.toString())
        socket.end()
    })
})

server.listen(port)

// launch server: node server.js