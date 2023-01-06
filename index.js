const http = require('http');
const date = require('./dateModel')
const num = require('./addNumModel')
const uc = require("upper-case")
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`the current date is ${date.currentDate()}`)
    // res.write(`the addition is ${num.addNum(10 , 20)}`)
    res.write(uc.upperCase("this is node package manager"))
    res.write(req.url)
    res.end()
}).listen(8000, () => {
    console.log('app is running on port 8000')
})