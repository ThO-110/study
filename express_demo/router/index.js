const express = require("express");
const { home, list, token } = require("../controller");

// 路由中间件
const router = express.Router();

router.get("/", home);

router.get("/api/list", list);

router.get("/token", token);

router.get("/index", (req, res, next) => {
  const query = req.query;
  console.log(query);
  res.send(`index page.`);
});

router.post("/index", (req, res, next) => {
  const data = req.body;
  res.send(data);
});

router.put("/index", (req, res, next) => {
  res.send("put method");
});

router.patch("/index", (req, res, next) => {
  res.send("patch method");
});

router.delete("/index", (req, res, next) => {
  res.send("delete method");
});

module.exports = router;
