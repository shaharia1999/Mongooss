const http=require('http');
const { stringify } = require('querystring');
// console.log(http);
 const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        res.write('<p>This is write Page</p>')
        // res.end()
    } if(req.url==='/home'){
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.write(JSONstringify({course:'Programing'}))
    }
    console.log(req.url);
    res.end('hlw server')
})
const PORT=5000;
server.listen(PORT)
console.log(`server is Running ${PORT}`);