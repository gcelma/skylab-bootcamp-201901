const http  = require('http')
const fs = require('fs')

const {argv:[,,port,file]} = process

http.createServer((req,res) => {
    const rs = fs.createReadStream(file)
    rs.pipe(res)
})
    .listen(port)

// To launch server: node index.js 8080 index.html

// To see in BhxBrowser, go to: http://192.168.0.109:8080/