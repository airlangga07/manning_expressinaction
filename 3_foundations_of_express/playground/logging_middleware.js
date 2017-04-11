const express = require("express");
const http = require("http");

let app = express();

// middleware
app.use((req, res, next) => {
  console.log(`In comes a ${req.method} to : ${req.url}`);
  next();
});

app.use((req, res, next) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
})

http.createServer(app).listen(3001);
