const http = require('http')

const server = http.createServer((req, res)=>{
  if(req.url == '/about'){
    res.write("Welcome to our aboutpage")
    res.end()
  }
  if(req.url == '/'){
    res.end("Welcome to our homepage")
  }
  
  res.end(
    `<h1>OOPS!</h1>`
  )
  
})
server.listen(5000)