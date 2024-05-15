const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = url.parse(req.url, true).pathname;
  const dataPath = "./src/asstets/data/data.json";
  if (method === "GET" && path === "/institude") {
    console.log("Get");
    fs.readFile(dataPath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }

      res.writeHead(200, { "Content-type": "application/json" });
      res.write(JSON.stringify(data));
      res.end();
    });
  } else if (method === "POST" && path === "/institude") {
    console.log("Post");
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        fs.readFile(dataPath, "utf-8", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-type": "application/json" });
            res.end(JSON.stringify({ error: err.message }));
          }

          const oldData = JSON.parse(data);
          const newData = JSON.parse(body);

          oldData.push(newData);
          console.log(oldData);

          fs.writeFile(dataPath, JSON.stringify(oldData), (err) => {
            if (err) {
              res.writeHead(500, { "Content-type": "application/json" });
              res.end(JSON.stringify({ error: err.message }));
            }
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify({ message: "Data Add Done" }));
          });
        });
      } catch (error) {
        res.writeHead(500, { "Content-type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  } else if (method === "DELETE" && path === "/institude") {
    console.log("Deleteee");
    try {
      fs.readFile(dataPath, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-type": "application/json" });
          res.end(JSON.stringify({ error: err.message }));
        }

        const oldData = JSON.parse(data);

        const id = url.parse(req.url, true).query.id;
        const index = oldData.findIndex((v) => v.id === id);

        oldData.splice(index, 1);

        console.log(oldData);

        fs.writeFile(dataPath, JSON.stringify(oldData), (err) => {
          if (err) {
            res.writeHead(500, { "Content-type": "application/json" });
            res.end(JSON.stringify({ error: err.message }));
          }
          res.writeHead(200, { "Content-type": "application/json" });
          res.end(JSON.stringify({ message: "Data Delelte Done" }));
        });
      });
    } catch (error) {
      res.writeHead(500, { "Content-type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  } else if (method === "PUT" && path === "/institude") {
    console.log("PUT254");

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        fs.readFile(dataPath, "utf-8", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-type": "application/json" });
            res.end(JSON.stringify({ error: err.message }));
          }

          const oldData = JSON.parse(data);
          const editData = JSON.parse(body)

          const id = url.parse(req.url, true).query.id;

          const index = oldData.findIndex((v) => v.id == id);

          oldData[index]=editData

          console.log(oldData);

          fs.writeFile(dataPath, JSON.stringify(oldData), (err) => {
            if (err) {
              res.writeHead(500, { "Content-type": "application/json" });
              res.end(JSON.stringify({ error: err.message }));
            }
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify({ message: "Data Update Done" }));
          });
        });
      } catch (error) {
        res.writeHead(500, { "Content-type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server Is Running On Port 3000");
});


