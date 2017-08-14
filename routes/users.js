var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', {
    username: 'tdostilio',
    password: 'you did it right?'
  });
});

module.exports = router;
