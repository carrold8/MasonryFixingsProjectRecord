const mysql = require('mysql2/promise');
const config = require('../config/db.config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.configB);
  const [results, ] = await connection.execute(sql, params);

  console.log('Results in Query: ');
  console.log(results);
  return results;
}

module.exports = {
  query
}