const express = require("express");
const http = require("http");

let app = express();

// middleware
app.use((req, res, next) => {
  console.log(`In comes a ${req.method} to : ${req.url}`);
  next();
});

app.use((req, res, next) => {
  let minute = (new Date()).getMinutes();
  if ((minute % 2) === 0) {
    next();
  } else {
    res.statusCode = 403;
    res.end("Not Authorized.");
  }
});

app.use((req, res) => {
  res.end("Secret Info: the password is 'swordfish'");
});

http.createServer(app).listen(3001);
