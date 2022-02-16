const express = require('express');
const router = express.Router();
const sonogram = require('../services/sonogram');

/* GET programming languages. */
router.get('/GetTomorrowSonos', async function(req, res, next) {
  try {
    res.json(await sonogram.sp_GetTomorrowSonos());
    // console.log(await sonogram.sp_GetTomorrowSonos());
  } catch (err) {
    console.error(`Error while getting sonograms `, err.message);
    next(err);
  }
});

router.get('/GetTomorrowSonosOKToText', async function(req, res, next) {
  try {
    res.json(await sonogram.sp_GetTomorrowSonosOKToText());
    // console.log(await sonogram.sp_GetTomorrowSonosOKToText());
  } catch (err) {
    console.error(`Error while getting sonograms `, err.message);
    next(err);
  }
});

module.exports = router;
