const express = require('express');

const router = express.Router();

const serieA = require ('../data/serieA/seriea');
const serieAScorers = require ('../data/serieA/serieAScorers');

//serie a ranking
router.get('/classement/seriea', (req, res) => {
    res.status(200).send(serieA);
});
//serie a scorers
router.get('/buteurs/seriea', (req, res) => {
    res.status(200).send(serieAScorers);
});

module.exports = router;