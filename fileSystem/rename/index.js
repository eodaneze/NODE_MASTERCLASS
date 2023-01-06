const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.rename('script.js', 'code.js', (err) => {
         if(err){
             console.error("file name changed");
         }
         console.log('file name has been renamed to code.js');
         res.end()
    })
  })
  .listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
  });
