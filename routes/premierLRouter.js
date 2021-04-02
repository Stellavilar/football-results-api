const express = require('express');

const router = express.Router();

const premierLeague = require ('../data/premierLeague/premierLeague');
const pLScorers = require ('../data/premierLeague/pLScorers');

//premier league ranking
router.get('/classement/premierleague', (req, res) => {
    res.status(200).send(premierLeague);
});
//premier league scorers
router.get('/buteurs/premierleague', (req, res) => {
    res.status(200).send(pLScorers);
});


module.exports = router;