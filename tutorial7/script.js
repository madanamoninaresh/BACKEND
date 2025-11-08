const express = require('express');
const app = express();
const userModel = require('./usermodel')
app.get('/',(req,res)=>{
    res.send('hey');
})
app.get('/create', async (req,res)=>{
    let a = await userModel.create({
        name:"arvind",
        username:"arvind123",
        email:"arvind@gmail.com"
    })
    console.log(a);
})
app.get('/update', async (req,res)=>{
    let createduser = await userModel.findOneAndUpdate({name:"naresh"},{name:"harish"},{new:true});

    console.log(createduser);
})
app.get('/read', async (req,res)=>{
    let createduser = await userModel.findOne({name:"harish"});

    console.log(createduser);
})
app.get('/delete', async (req,res) => {
    let d = await userModel.deleteOne({name:"arvind"})
console.log(d);})
app.listen(3000);