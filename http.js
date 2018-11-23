const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url === "./"){
        console.log("This is the page");
    }
})

server.listen(3000);
console.log("Server Listening...")