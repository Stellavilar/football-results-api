const express = require('express');

const router = express.Router();

const ligue1 = require ('../data/ligue1/ligue1');
const ligue1Scorers = require ('../data/ligue1/ligue1Scorers');
const calendar = require ('../data/ligue1/calendar');

//ligue 1 ranking
router.get('/classement/ligue1', (req, res) => {
    res.status(200).send(ligue1);
});
//Ligue 1 ligaScorers
router.get('/buteurs/ligue1', (req, res) => {
    res.status(200).send(ligue1Scorers);
});
//Ligue 1 calendar
router.get('/calendrier/ligue1', (req, res) => {
    res.status(200).send(calendar);
});


module.exports = router;