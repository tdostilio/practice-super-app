var express = require('express');
var router = express.Router();
const db = require('../db');



router.get('/', function(req, res, next) {
  db.query(`
    select * from cd.members where memid>0 order by surname;
  `)
  .then( (results) => {
    console.log(results);
    res.render('members', {
      members: results
    });
  })
  .catch(console.log)
});

router.get('/:id', function(req, res, next) {
  db.one(`
    select * from cd.members where memid=${req.params.id};
  `).then( (result) => {
    console.log(result);
    res.render('members', {
      members: [result]
    });
  });
});


router.get('/:id/edit', function(req, res, next) {
  db.one(`
    select * from cd.members where memid=${req.params.id};
  `).then( (result) => {
    console.log(result);
    res.render('members-form', {
      member: result
    });
  });
});


router.post('/:id/edit', function(req, res, next) {
  console.log(req.body);

  // TODO: update all the keys
  db.result(`
    update cd.members
      set
      surname='${req.body.surname}'
      where memid=${req.params.id};
  `).then((result) => {
    // db.one(`
      // select * from cd.members where memid=${req.params.id};
    // `).then( (result) => {
      console.log(result);
      res.render('members-form', {
        member: result
      });
    // });
  }).catch(console.log)
});


module.exports = router;
