"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const path = require("path");
// serve index.html on the route '/'
app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});
app.use((req, res) => res.status(404).send('This is not the page you are looking for...'));
app.listen(3000, () => {
    console.log("Server running at port 3000");
});
