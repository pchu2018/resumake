"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const { Express } = require("@types/express");
const app = (0, express_1.default)();
const path = require("path");
// serve index.html on the route '/'
app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});
app.listen(3000, () => {
    console.log("Server running at port 3000");
});
