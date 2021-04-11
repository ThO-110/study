const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const router = require("./router/index");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("./public"));

// view engine setup
app.engine("art", require("express-art-template"));
app.set("view options", {
  debug: process.env.NODE_ENV !== "production",
  escape: false,
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "art");

app.use("/", router);

app.listen(8080, () => {
  console.log("listening localhost:8080...");
});
