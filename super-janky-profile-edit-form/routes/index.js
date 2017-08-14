var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    layout: 'layout2',
    title: 'Express',
    message: 'HI HI HI HI HI HI HI HI!'
  });
});

module.exports = router;
