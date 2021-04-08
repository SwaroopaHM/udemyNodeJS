const http = require('http');
const fs = require('fs');

//Sending text data
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-type': 'text/plain'})
//     res.end('Hello world')
// }).listen(3775, '127.0.0.1');

//Sending html: below code waits to buffer all data and send to response
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'})
// const html= fs.readFileSync(__dirname+'/index.htm')
// res.end(html)
// }).listen(3775,'127.0.0.1');

//Sending html: below code sends the chunk of data as and when available.
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'})
// fs.createReadStream(__dirname+'/index.htm').pipe(res)
// }).listen(3775,'127.0.0.1');

//Sending the json data 
http.createServer(function(req, res){
    if(req.url === '/'){
    res.writeHead(200, {'Content-type': 'Application/json'})
    var obj={
        name: 'Gaurav',
        age:'3',
    }
    res.end(JSON.stringify(obj))   //Seriaized
}
else if(req.url === '/api') {
    res.writeHead(200, {'Content-type': 'text/html'})
fs.createReadStream(__dirname+'/index.htm').pipe(res)  
}
else {
    res.writeHead(404);
    res.end();
}
}).listen(3775,'127.0.0.1');
