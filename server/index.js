// @ts-check
const { resolve } = require("node:path");
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

app.use("/vendor", express.static(resolve(__dirname, "../new/out")));
app.use("/", express.static(resolve(__dirname, "../old/dist")));

app.listen(8080);
