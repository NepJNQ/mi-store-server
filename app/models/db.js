const mysql = require("mysql");
const { dbConfig } = require("../../config");
const pool = mysql.createPool(dbConfig);

const db = {};
db.query = function (sql, params) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) resolve(err);
      else {
        connection.query(sql, params, (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
          connection.release();
        });
      }
    });
  });
};

module.exports = db;
