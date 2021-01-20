const express = require('express');
const app = express();
const dlsIndex = require('./routers/dlsIndex');

app.listen(3000, ()=>{
    console.log("Listen on port:" + '3000');
});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', dlsIndex);