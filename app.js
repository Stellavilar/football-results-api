const express = require ('express');
const cors = require ('cors');
const corsMiddleware = require ('./corsMiddleware');
const router = require ('./routes/router');
const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router)


module.exports = app;