const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

//app.use(express.static("build"));

app.listen(PORT, () => {
  console.log("server is listening on http://localhost:" + PORT);
});
