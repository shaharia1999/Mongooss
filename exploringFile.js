const http=require('http')
const url=require('url')
const fs=require('fs')
const PORT=5000;
const server=http.createServer((req,res)=>{
   if(req.url==='/'){
       fs.readFile('data.txt',(err,data)=>{
        if(err){
            res.write('Failed Data')
            res(end)
        }else{
            res.write(data)
            res.end()
        }
       })
   }
})
server.listen(PORT)