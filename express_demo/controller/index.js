const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const home = (req, res, next) => {
  res.send("Home");
};

const list = (req, res, next) => {
  const dataArray = [];

  for (let i = 0; i < 50; i++) {
    dataArray.push("line " + i);
  }

  res.set("content-type", "application/json;charset=utf-8");

  res.render("list", { dataArray });
};

const token = (req, res, next) => {
  /** 对称加密 start */
  // const token = jwt.sign({ username: "Thomas" }, "A jwt demo.");
  // const decoded = jwt.verify(token, "A jwt demo.");
  // res.send(decoded);
  /** end */

  /** 非对称加密 start */
  const privateKey = fs.readFileSync(
    path.join(__dirname, "../keys/rsa_private_key.pem")
  );
  const token = jwt.sign({ username: "Thomas" }, privateKey, {
    algorithm: "RS256",
  });
  const publicKey = fs.readFileSync(
    path.join(__dirname, "../keys/rsa_public_key.pem")
  );
  const decoded = jwt.verify(token, publicKey);
  res.send(decoded);
  /** end */
};

module.exports = {
  home,
  list,
  token,
};
