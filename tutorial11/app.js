const express = require('express');
const app = express();
const userMOdel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/create', async (req, res) => {
    let user = await userMOdel.create({
        username: "john_doe",
        email: "hon@gmail.com",
        age: 30
    })
    res.send(user);
});
app.get('/post/create',async (req,res)=>{
    let post  = await postModel.create({
         postdata:"This is my first post",
         user:"690b26a6ae64fd6ceba8c2cc"
    })
    let user = await userMOdel.findOne({_id:"690b26a6ae64fd6ceba8c2cc"});
    user.post.push(post._id);
    await user.save();
    res.send({post,user})
})

app.listen(3000);