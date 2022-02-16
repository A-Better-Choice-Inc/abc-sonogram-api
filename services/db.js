const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);
  // console.log("DB Results", results)
  
  const [data, resultSetHeader] = results
  
  return data;
}

module.exports = {
  query,
};
