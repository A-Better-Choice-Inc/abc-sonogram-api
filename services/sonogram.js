const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function sp_GetTomorrowSonos(){
  const rows = await db.query(`CALL sp_GetTomorrowSonos()`);
  const data = helper.emptyOrRows(rows);

  console.log(data)

  return {
    data
  }
}

async function sp_GetTomorrowSonosOKToText(){
  const rows = await db.query(`CALL sp_GetTomorrowSonosOKToText()`);
  const data = helper.emptyOrRows(rows);

  console.log(data)

  return {
    data
  }
}

module.exports = {
  sp_GetTomorrowSonos,
  sp_GetTomorrowSonosOKToText
}
