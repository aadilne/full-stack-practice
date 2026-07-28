
const {sumRequestHandler} = require('./sum');

const requestHandler = ( req ,res ) =>{

    console.log(req.url  , req.method );

    if( req.url === '/'){

        res.setHeader('Content-Type' , 'text/html');
        res.write(`
        <html>
        <head> <title> Practice set  </title>  </head>
        <body>
         <h1> Calculator  </h1> 
         <a href ="/calculator"> Go to Claculator </a> 
        </body>
        </html>    
            
        `);
        return res.end();
    } else if (req.url.toLowerCase() === "/calculator"){
        res.setHeader('Content-Type' , 'text/html');
        res.write(`
        <html>
        <head> <title> Practice set  </title>  </head>
        <body>
         <h1> Calculator  </h1> 
         <form  action ="/calculator-result" method ="POST"> 
         <input type="text"  placeholder ="first num" name="first" />
         <input type="text"  placeholder ="second num" name="sec num" />
         <input type="submit" value ="sum">

         </form>
         
        </body>
        </html>  
        
        `)
        return res.end();

    } else if (req.url.toLowerCase() ==="/calculate-result"  && req.method === 'POST') {
       return sumRequestHandler(req ,res);
    }

    res.setHeader('Content-Type' , 'text/html');
        res.write(`
        <html>
        <head> <title> Practice set  </title>  </head>
        <body>
         <h1> 404 page not exist  </h1> 
         <a href ="/"> Go to Home </a> 
        </body>
        </html>    
        `)

}


exports.requestHandler = requestHandler;