const http = require("http");
const port = 3000;
const fs = require("fs");

const server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("hello");
  fs.readFile("/home/rzry/code/projects/andbru.tech/dist/index.html", function(
    error,
    data
  ) {
    if (error) {
      res.writeHead(404);
      res.write("error not found");
      res.writeContinue;
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function(error) {
  if (error) {
    console.log("something went wrong");
  } else {
    console.log("Server is stilll listening " + port);
  }
});
