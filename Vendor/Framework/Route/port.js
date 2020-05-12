const express = require("express");
const app = express();
const listen_port = (port) => {
  return app.listen(port);
};

module.exports = listen_port;
