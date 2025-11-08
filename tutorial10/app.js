const express = require('express'); 
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// app.get('/', (req, res) => {
//     // res.render('index');
//     // res.send('Hello, World!');
// });
app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/create', (req,res)=>{
      let {username,email,password,age} = req.body;
      bcrypt.genSalt(10,async function(err,salt){
        bcrypt.hash(password,salt,async function(err,hash){
                let createdUser = await userModel.create({
                        username,
                        email,
                        password:hash,
                        age
                });
                let token = jwt.sign({email:email},"naresh");
                res.cookie("token",token)
                res.send(createdUser);
        })
      })
    //   console.log(password)
})
app.get('/login',async (req,res)=>{
        res.render('login');
})
app.post('/login',async (req,res)=>{
        let user = await userModel.findOne({email:req.body.email});
        if(!user) res.send("something went wrong");

        bcrypt.compare(req.body.password, user.password, function(err, result){
            if (result) { 
                let token = jwt.sign({email:user.email},"naresh");
                res.cookie("token",token);
                res.send("you can login");
            }
            else res.send("something went wrong");
        })
})
app.get('/logout',(req,res)=>{
    res.cookie("token","");
    res.redirect("/")
})

app.listen(3000);