var express = require('express');
var router = express.Router();

const db = require('../db');
/* GET home page. */
router.get('/:id', function(req, res, next) {
    db.one(`
        select * from cd.facilities where facid =${req.params.id};
    `).then( (result) => {
        console.log(result);
        res.render('facilities', { 
            facility: result
        });
    }); 
});

module.exports = router;