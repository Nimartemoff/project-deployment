var express = require('express');
var router = express.Router();
const request = require('request');


router.get('/', function(req, res, next) {
  let url = 'http://127.0.0.1:5000/predict';
  let queryParams = { X: [5.1, 3.5, 1.4, 0.2] };

  request({url:url, qs:queryParams}, (err, resp, body) => {
    console.error('error: ', err);
    console.log('statusCode: ', resp && resp.statusCode);
    console.log('body: ', body);

    res.send(body);
  });
});

module.exports = router;
