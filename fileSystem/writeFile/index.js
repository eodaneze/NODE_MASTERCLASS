const http = require("http");
const fs = require("fs");

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:


http.createServer((req, res) => {
    const data = "HELLO WORLD"
   fs.writeFile('text.txt', data, (err) => {
        if(err) throw err
        console.log('DATA HAS BEEN SAVED');
        res.end()
   })
  })
  .listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
  });
