"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URI = void 0;

var _dotenv = require("dotenv");
//linkki mongodbeehen, voit vaihtaa omaan jotta saat sen toimimaan MongoDB Compassin kanssa
(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://danielpoliakov:daniel.poliakov@cluster0.mhbc6.mongodb.net/test";
exports.MONGODB_URI = MONGODB_URI;