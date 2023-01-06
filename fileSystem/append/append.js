const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
     fs.appendFile('index.txt' , 'HELLO FILE', (err) => {
        //  if the index.txt was not existing, the system we create the file
        if(err) throw err;  
        console.log('SAVED!!');
        res.end()
     })
  })
  .listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
  });
