var express = require('express');
var router = express.Router();
var connect = require('../config/connection');
/* GET home page. */
router.get('/', function(req, res, next) {

  connection.query('SELECT * FROM users', function(err,rows){
  if(err) throw err; 
  console.log(rows);
  res.render('index',{ users:rows});
 
  });


  res.render('index', { title: 'Welcome' });

});

module.exports = router;
