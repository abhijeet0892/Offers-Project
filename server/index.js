const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM offers_table";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const {
    account_id,
    sponsor_name,
    campaign_id,
    seid,
    campaign_name,
    vertical,
    payout,
    price_format,
    status,
  } = req.body;
  const sqlInsert =
    "INSERT INTO offers_table (account_id, sponsor_name, campaign_id, seid, campaign_name, vertical, payout, price_format, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [
      account_id,
      sponsor_name,
      campaign_id,
      seid,
      campaign_name,
      vertical,
      payout,
      price_format,
      status,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

app.get("/", (req, res) => {
  //   const sqlInsert =
  //     "INSERT INTO offers_table (account_id, sponsor_name, campaign_id, seid, campaign_name, vertical, payout, price_format, status) VALUES (350381, 'ClixFlow_01', 2, 2, 'Survey - CVS - [US] - Revshare', 'Misc', 19, 'CPA', 'Active')";
  //   db.query(sqlInsert, (error, result) => {
  //     console.log("error", error);
  //     console.log("result", result);
  //     res.send("Hello Express");
  //   });
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is running on - http://localhost:${port}`);
});
