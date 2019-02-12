const http = require('http')

const {argv:[,,url]} = process

http.get(url, function(res) {
    res.on('data', function(data) {
        console.log(data.toString())
    })
})

