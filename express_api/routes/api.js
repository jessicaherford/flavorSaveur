var express = require('express');
var router = express.Router();
var unirest = require('unirest');

require('dotenv').config();

/* GET home page. */
router.get('/:ingredients', function(req, res, next) {
  console.log('bing bong');
  unirest.get('http://food2fork.com/api/search?key=c24b2377e69e34d6b450d0b43e35c9e0&q=' + req.params.ingredients).end(function (response) {
  console.log(response.body);
  res.json(response.body);
});

});



module.exports = router;
