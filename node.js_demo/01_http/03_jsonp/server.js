const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const urlStr = req.url;
  const urlObj = url.parse(urlStr, true).query;
  // console.log(urlObj);

  res.write(`${urlObj.cb}('hello backend!')`);
  res.end();
});

server.listen(8080, () => {
  console.log("listen localhost 8080...");
});
