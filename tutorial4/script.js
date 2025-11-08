const express = require('express')
const app = express()
const hell = require('./routes/hell')
app.use('/thing1',hell)
// app.use((req,res,next)=>{
//     console.log("middleware1");
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("middleware2");
//     next(); 
// })
app.get('/',(req,res)=>{
    res.send("hello world");
})
app.listen(3000);