var MySql = require('sync-mysql');

var connMySQL = function () {
  return new MySql({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'kpi'
  });
}

module.exports = function () {
  return connMySQL;
}
