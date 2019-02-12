const net = require('net')
const strftime = require('strftime')

const { argv: [, , port] } = process

const server = net.createServer(socket => {

    const formattedDate = strftime('%F %R\n')

    socket.end(formattedDate)
})

server.listen(port)


// initiate server: node index.js 8080

// call to server: nc localhost 8080