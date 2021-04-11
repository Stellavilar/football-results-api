const express = require('express');

const router = express.Router();

const premierLeague = require ('../data/premierLeague/premierLeague');
const pLScorers = require ('../data/premierLeague/pLScorers');
const calendar = require ('../data/premierLeague/calendar');

//premier league ranking
router.get('/classement/premierleague', (req, res) => {
    res.status(200).send(premierLeague);
});
//premier league scorers
router.get('/buteurs/premierleague', (req, res) => {
    res.status(200).send(pLScorers);
});
//Premier League calendar
router.get('/calendrier/premierleague', (req, res) => {
    res.status(200).send(calendar);
});


module.exports = router;