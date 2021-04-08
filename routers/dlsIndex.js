const router = require('express').Router();
const member = require('../models/member');

router.get('/index', async(req, res)=>{
  let memberList = await member.member(req, res);
  res.render('index', { memberList: memberList });       //res.render(view [, locals] [, callback])
});

router.get('/firmpage', async(req, res)=>{                //網址的命名
  res.render('firmPage');       //res.render(view [, locals] [, callback]), 針對views
});

module.exports = router;