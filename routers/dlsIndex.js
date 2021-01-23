const router = require('express').Router();
const member = require('../models/member');

router.get('/index', async(req, res)=>{
    let memberList = await member.member(req, res);
    console.log(memberList);
    res.render('index', {memberList:memberList});
});

module.exports = router;