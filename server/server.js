const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();
const apiRouter = require('./routes/api');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter)

app.listen(3000, () => {
  console.log('Server running on PORT 3000')
});