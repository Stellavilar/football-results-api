const express = require('express');

const router = express.Router();

const bundesliga = require ('../data/bundesliga/bundesliga');
const bundesligaScorers = require ('../data/bundesliga/bundesligaScorers');

//bundesliga ranking
router.get('/classement/bundesliga', (req, res) => {
    res.status(200).send(bundesliga);
});
//bundesliga Scorers
router.get('/buteurs/bundesliga', (req, res) => {
    res.status(200).send(bundesligaScorers);
});

module.exports = router;