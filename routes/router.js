const express = require('express');

const router = express.Router();

const ligue1 = require ('../data/ligue1');
const premierLeague = require ('../data/premierLeague');
const liga = require ('../data/liga');
const serieA = require ('../data/seriea');

// homepage
router.get('/', (req, res) => {
    res.send('Hello world !');
});
//ligue 1 ranking
router.get('/classement/ligue1', (req, res) => {
    res.status(200).send(ligue1);
});
//liga ranking
router.get('/classement/liga', (req,res) => {
    res.status(200).send(liga)
});
//premier league ranking
router.get('/classement/premierleague', (req, res) => {
    res.status(200).send(premierLeague);
});
//serie a ranking
router.get('/classement/seriea', (req, res) => {
    res.status(200).send(serieA);
});

module.exports = router;
