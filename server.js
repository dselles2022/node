const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/')
    {
        res.end('welcome to our home page bitches')
    }
    if(req.url === '/about')
    {
        res.end("Here is our short history")
    }
    res.end(`<h1> Oops we can find the page you are looking for </h1>
    <a href="/"> back home </a>`)

})

server.listen(5000)