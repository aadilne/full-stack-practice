

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