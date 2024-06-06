const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const userRouter = require('./routers/userRouter');
const CornOps = require('./cronJob');
const app = express();

console.log("Starting server");
dotenv.config({ path: './config/config.env' });
require('./config/connection');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
CornOps.start();

app.listen(process.env.PORT || 5000, () => { console.log("Server Started") });