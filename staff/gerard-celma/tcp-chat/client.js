let net = require('net')

const {argv:[,,message]} = process

// ip = "192.168.0.24"
port = 8081

let socket = new net.Socket({readable: true, writable: true})
socket.connect(port)
socket.end(message)

// Launch client: node client.js "message"