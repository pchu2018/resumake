import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const path = require("path");

// serve index.html on the route '/'
app.get("/", (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.use((req, res) =>
  res.status(404).send('This is not the page you are looking for...')
);

app.listen(3000, () => {
  console.log("Server running at port 3000");
});