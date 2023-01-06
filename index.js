const http = require("http");
const date = require("./dateModel");
const num = require("./addNumModel");
const fs = require("fs");
http.createServer(function (req, res) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000, () => {
    console.log("app is running on port 8000");
  });
