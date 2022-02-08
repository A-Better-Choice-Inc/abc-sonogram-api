const express = require('express');
const router = express.Router();
const sonogram = require('../services/sonogram');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await sonogram.getMultiple());
    // console.log(await sonogram.getMultiple());
  } catch (err) {
    console.error(`Error while getting sonograms `, err.message);
    next(err);
  }
});

module.exports = router;
