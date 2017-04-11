const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

var publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.use((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("looks like you did not find a static file");
})

http.createServer(app).listen(3001);
