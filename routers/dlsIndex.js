const router = require('express').Router();
const member = require('../models/member');

router.get('/index', async(req, res)=>{
    let memberList = await member.member(req, res);
    res.render('index', { memberList: memberList });       //res.render(view [, locals] [, callback])
});

module.exports = router;