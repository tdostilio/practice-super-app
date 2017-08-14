const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/', function(req, res, next) {
  db.query(`
    select * from cd.facilities;
  `)
  .then( (results) => {
    console.log(results);
    res.render('facilities', {
      facilities: results
    });
  })
  .catch(console.log)
});

router.get('/:id', function(req, res, next) {
  db.one(`
    select * from cd.facilities where facid=${req.params.id};
  `).then( (result) => {
    console.log(result);
    res.render('facilities', {
      facilities: [result]
    });
  });
});

module.exports = router;
