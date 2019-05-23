const http = require('http');
const writeFile = require('../modles/write-file');

http.createServer((req, res) => {
    // Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    let body = '';
    req.on('data', chunk => {
        body += chunk;//.toString();
    });
    req.on('end', () => {
        writeFile(body);
    })
}).listen(5000);