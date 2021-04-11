const logger = require("../../utils/log4js/log");
const http = require("http");
const https = require("https");
const querystring = require("querystring");

const server = http.createServer((request, response) => {
  let data = "";
  request.on("data", (chunk) => {
    data += chunk;
  });
  request.on("end", () => {
    // logger.debug(data);
    // response.write(JSON.stringify(querystring.parse(data)));
    logger.debug(JSON.stringify(querystring.parse(data)));
    response.write(JSON.stringify("backend has received the data..."));
    response.end();
  });

  // https.get(
  //   "https://www.xiaomiyoupin.com/mtop/mf/resource/data/list",
  //   (req) => {
  //     let data = "";
  //     req.on("data", (chunk) => {
  //       data += chunk;
  //     });
  //     req.on("end", () => {
  //       response.writeHead(200, {
  //         "content-type": "application/json;charset=utf-8",
  //       });
  //       response.write(data);
  //       response.end();
  //     });
  //   }
  // );
});

server.listen(8080, () => {
  console.log("listening server 8080...");
});
