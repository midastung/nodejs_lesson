const router = require('express').Router();   //幫助命名
const member = require('../models/member');
const firmdata = require('../models/firmData');

router.post('/getdata', async(req, res)=>{
    let memberList = await member.member(req, res);
    res.send({ memberList: memberList });       //res.render(view [, locals] [, callback])
});

//getfirmdata 進貨
router.post('/getfirmdata', async (req, res) => {
  let firmItemList = await firmdata.firmData(req, res);
  res.send({rows: firmItemList});
});

module.exports = router;