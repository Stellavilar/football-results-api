const express = require ('express');
const cors = require ('cors');
const corsMiddleware = require ('./corsMiddleware');
const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const ligue1 = require ('./ligue1');

app.get('/', (req, res) => {
    res.status(200).send('hello world !');
});

app.get('/classement/ligue1', (req, res) => {
    res.status(200).send(ligue1);
});

const port = 4567;

// app.listen(port, () => {
//     console.log(`Listening on: http://localhost:${port}`);
// });

module.exports = app;