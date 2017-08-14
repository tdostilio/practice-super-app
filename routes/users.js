var express = require('express');
var router = express.Router();
const db = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
    db.query(`
        select * from cd.members;
    `).then( (result) => {
        res.render('members', { 
            members: result
        });
    }); 
});

module.exports = router;