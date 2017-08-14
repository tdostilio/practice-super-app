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

router.get('/:id', function(req, res, next) {
    db.one(`select * from cd.members where memid=${req.params.id};
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
        res.render('newMembers', {
            member: result
        });
    });
});

router.post('/:id/edit', function(req, res, next) {
    console.log(req.body);

    db.result(`
        update cd.members
        set
        surname='${req.body.surname}'
        where memid=${req.params.id};
        update cd.members
        set
        firstname='${req.body.firstname}'
        where memid=${req.params.id};
    `).then((result) => {
        console.log(result);
        res.render('newMembers', {
            member: result
        });
    }).catch(console.log) 
});

router.get('/new', function(req,res,next) {
    req.render('addMember');
})

module.exports = router;