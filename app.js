const express = require('express');     //呼叫套件
const app = express();      
const dlsIndex = require('./routers/dlsIndex');     //設定router位址  

app.listen(3000, ()=>{                              //聽port位址
    console.log("Listen on port:" + '3000');
});

app.set('views', './views');        //設定view位置
app.set('view engine', 'ejs');      //範本檔設定
app.use('/', dlsIndex);             //網址位址