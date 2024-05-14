const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("listening on port");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  
  console.log(url.parse(req.url,true).query);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write("Hello Eons")
  res.end();
});

server.listen(3000, () => {
    console.log("server is running on port 3000");
});
 
