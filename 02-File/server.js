const http = require('http');
const fs = require("fs");
const os = require("os");
const path = require("path");

const hostname = 'localhost';
const port = process.env.port || 3000;

console.log("Current File Path",__filename);
//Current File Path E:\Work\Projects\Node\02-File\server.js

console.log("\nCurrent Directory Path",__dirname);
//Current Directory Path E:\Work\Projects\Node\02-File

var totalMemory = os.totalmem();
console.log("\nTotal Memory:",totalMemory);
//Total Memory: 8500862976

var freeMemory = os.freemem();
console.log("\nFree Memory:",freeMemory);
//Free Memory: 3182632960


/* Read File */
const server = http.createServer((req,res) => {
  

      //Write File
    //   var todos = {
    //     "title": "title 3",
    //     "content": "hello this is title 3 description"
    // };

    //   fs.appendFile('todos.json', JSON.stringify(todos), function (err) {
    //     if (err) console.log(err);
    //     console.log('Saved!');
    //   });
      
      //Read File
    fs.readFile('todos.json', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
      
});

var pathObj = path.parse(__filename);
console.log("\nfileobj:\n",pathObj);

server.listen(port, hostname, () => {
  console.log(`\nServer running at http://${hostname}:${port}/`);
});

