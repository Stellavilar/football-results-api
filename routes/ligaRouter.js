const express = require('express');

const router = express.Router();

const liga = require ('../data/liga/liga');
const ligaScorers = require ('../data/liga/ligaScorers');
const calendar = require ('../data/liga/calendar');

//liga ranking
router.get('/classement/liga', (req,res) => {
    res.status(200).send(liga);
});
//liga scorers
router.get('/buteurs/liga', (req,res) => {
    res.status(200).send(ligaScorers);
});
//Liga calendar
router.get('/calendrier/liga', (req,res) => {
    res.status(200).send(calendar);
});

module.exports = router;