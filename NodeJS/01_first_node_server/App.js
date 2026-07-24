
const  http = require('http')

const server = http.createServer((req , res) =>{
    console.log(req)
});

// server.listen(3000)

const PORT = (3000)

server.listen( PORT , () =>{
    console.log(`Server runnign at http://localhost:${PORT}`)
});