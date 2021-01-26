const express = require('express');     //呼叫套件
const app = express();      
const dlsIndex = require('./routers/dlsIndex');     //設定router位址  
const config = require('config');
const port = config.get('app.port');

app.listen(port, ()=>{                              //聽port位址
    console.log("Listen on port:" + '3000');
});

app.set('views', './views');        //範本檔所在的目錄
app.set('view engine', 'ejs');      //要使用的範本引擎
app.use('/', dlsIndex);             //網址位址