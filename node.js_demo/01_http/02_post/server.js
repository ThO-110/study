const http = require("http");
const logger = require("../../utils/log4js/log");
const querystring = require("querystring");

const postData = querystring.stringify({
  province: "上海",
  city: "上海",
  district: "宝山区",
  address: "同济支路199号智慧七立方3号楼2-4层",
  latitude: 43.0,
  longitude: 160.0,
  message: "求购一条小鱼",
  contact: "13666666",
  type: "sell",
  time: 1571217561,
});

const options = {
  protocol: "http:",
  hostname: "localhost",
  method: "post",
  port: 8080,
  path: "",
  headers: {
    "Content-Type": "application/x-www.form-urlencoded",
    "Content-Length": Buffer.byteLength(postData),
  },
};

const server = http.createServer((req, res) => {
  const request = http.request(options, (result) => {
    result.on("data", (chunk) => {
      logger.debug(chunk);
    });
  });
  request.write(postData);
  request.end();

  res.end();
});

server.listen(3000, () => {
  console.log("listening localhost 3000...");
});
