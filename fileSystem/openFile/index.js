// fs.open accepts deifferent flags and a callback 

/*   
 r: Opening a file for reading, throwing an exception if the file doesn't exist.
r+: Opening a file for both reading and writing, throwing an exception if the file doesn't exist.
w: Opening a file for writing, creating the file if it doesn't exist, ...

fs.open( filename, flags, mode, callback )
*/

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
   
    fs.open("index.html", "r+", (err, data) => {
         console.log(data);
         res.end()
    })
  })
  .listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
  });
