const http = require("http");
const fs = require("fs");   
http.createServer((req, res) => {
    const data = "HELLO WORLD"
   fs.unlink('main.js', (err) => {
        if(err){
            console.error('file deleted');
        }
        console.log('File was successfully deleted');
        res.end()
   })
  })
  .listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
  });