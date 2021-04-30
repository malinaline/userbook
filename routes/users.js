var express = require('express');
const app = require('../app');
var router = express.Router();


const mysql = require("mysql2");

/* GET users listing. */
router.get('/', function(req, res, next) {


req.app.locals.con.connect(function(err){
  if (err) {
    console.log(err);
  }

let saveName = "Tom";
let saveEmail = "tom@mail.com";

// SELECT userName, userEmail FROM users
let sql = `SELECT * FROM users`

req.app.locals.con.query(sql, function(err, result) {

  if (err) {
    console.log(err);
  }
console.log("result", result);
res.send(result);

})

})

});

module.exports = router;
