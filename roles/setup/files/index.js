var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("<h1>Hello World! This server is created by Yosef Adel with fully Automated methods </h1>");
});
server.listen(3000);
