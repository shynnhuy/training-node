const express = require("express");
const { join } = require("path");

const server = express();

server.use(express.static(join(__dirname, "../public")));

server.listen(3000, console.log("Server start on port 3000"));
