const http = require("http");

const hostname = 'localhost';
const port = process.env.port || 3000;

const server = http.createServer((req,res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    if(req.url==="/")
    {
      res.write("Welcome to my first node app");
      res.end();
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/* To Run this program */
//run below command
//node server.js