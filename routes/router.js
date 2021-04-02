const express = require('express');

const router = express.Router();

//import routes
const liga = require ('./ligaRouter');
const ligue1 = require ('./ligue1Router');
const premierLeague = require ('./premierLRouter');
const serieA = require ('./serieARouter');
const bundesliga = require ('./bundesligaRouter');

// homepage
router.get('/', (req, res) => {
    res.send('Hello world !');
});

router.use('/', liga);
router.use('/', ligue1);
router.use('/', premierLeague);
router.use('/', serieA);
router.use('/', bundesliga);

module.exports = router;
