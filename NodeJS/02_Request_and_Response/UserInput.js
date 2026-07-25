


const http = require('http')

const server = http.createServer((req , res) =>{
    console.log(req.url , req.method , req.headers);

    if (req.url === '/'){

    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head> <title> Your Details </title> </head>')
    res.write('<body> <h1>Enter your Details</h1> </body>')
    res.write('<form action ="/submit-details" method ="POST">');
    res.write('<input type="text" name ="username" placeholder ="Enter your name" /> <br>' )
    res.write('<label for ="male"> Male</label>')
    res.write('<input type="radio" name ="gender" id="male" value="male" />' )
    res.write('<label for ="female"> Female</label>')
    res.write('<input type="radio" name ="gender" id="female" value="female" />' )
    res.write(' <br> <input type="submit"  value ="submit"/>')

    res.write('</form>');
    res.write('</html>');
    return res.end();

    }

    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head> <title> response line </title> </head>')
    res.write('<body> <h1> First outer Home</h1> </body>')
    res.write('</html>');
    res.end();
});

const PORT = (3000)

server.listen(PORT , () =>{
    console.log(`server running at http://localhost${PORT}`)
})