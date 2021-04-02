const express = require ('express');
const cors = require ('cors');
const corsMiddleware = require ('./corsMiddleware');
const router = require ('./routes/router');
const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router)

// const port = 1234;

// app.listen(port, () => {
//     console.log(`Listening on http://localhost:${port}`)
// })
module.exports = app;