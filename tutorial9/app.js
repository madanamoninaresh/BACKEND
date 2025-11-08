const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cookieParser());
// app.use(coo)
// app.use(cookieParser());
// app.get('/',(req,res)=>{
//     res.cookie("name","harish");
//     res.send("hello");
// })
// app.get('/read',(req,res)=>{
//     // res.cookie("name","harish");
//     console.log(req.cookies)
//     res.send("hello");
// })
app.get('/',(req,res) => {
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("naresh123", salt, function(err, hash) {
        console.log(hash);
    });
});
});
// app.get("/",(req,res) => {
//     bcrypt.compare("naresh123", "$2b$10$id7qafLIhF4gEciYd5p6Duga5DhEW4hRl5afJacYNMGDz2CI/Efva", function(err, result) {
//     console.log(result);
// });
// })

// app.get("/",(req,res) => {
//     let token = jwt.sign({email:"naresh@gmail.com"},"naresh");
//     // console.log(token);
//     res.cookie("token",token);
//     res.send("token generated");
// })
// app.get("/read",(req,res) => {
//     let data =jwt.verify(req.cookies.token,"naresh");
//     console.log(data);
// });


app.listen(3000)
