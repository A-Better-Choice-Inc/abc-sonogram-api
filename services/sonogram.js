const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(){
  const rows = await db.query(`CALL sp_GetTomorrowSonos()`);
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
  getMultiple
}
