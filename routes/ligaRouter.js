const express = require('express');

const router = express.Router();

const liga = require ('../data/liga/liga');
const ligaScorers = require ('../data/liga/ligaScorers');

//liga ranking
router.get('/classement/liga', (req,res) => {
    res.status(200).send(liga);
});
//liga scorers
router.get('/buteurs/liga', (req,res) => {
    res.status(200).send(ligaScorers);
});

module.exports = router;