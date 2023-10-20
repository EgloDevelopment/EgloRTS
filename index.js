const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const setupWebSocket = require(__dirname + "/websocket");

setupWebSocket(server, app)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("EgloRTS");
});

server.listen(5010, () => {
  console.log(`🎉  EgloRTS listening on port 5000`);
});
