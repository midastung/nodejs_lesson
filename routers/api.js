const router = require('express').Router();
const member = require('../models/member');

router.post('/getdata', async(req, res)=>{
    let memberList = await member.member(req, res);
    res.send({ memberList: memberList });       //res.render(view [, locals] [, callback])
});

module.exports = router;