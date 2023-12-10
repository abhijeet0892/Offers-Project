const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "reactjs@2023",
  database: "offer_detail",
});

module.exports = db;
