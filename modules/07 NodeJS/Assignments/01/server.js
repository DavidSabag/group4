var http = require('http');

http.createServer(function (req, res) {
    if(req.method === "GET"){}
    
    if(req.method === "POST"){
        let body = "";
        req.on("data",function(chunk){
            body += chunk;
            console.log(body);
        }) 
        
    }
    



}).listen(5000);
console.log("listen on 5000")