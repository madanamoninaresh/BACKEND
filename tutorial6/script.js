const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const port = 3000
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.get('/', (req, res) => {
    fs.readdir('./files',(err,files)=>{
        res.render('index',{files:files});
})
})
app.get('/files/:filename', (req, res) => {
      fs.readFile(`./files/${req.params.filename}`,(err,filedata)=>{
      res.render('show',{filename:req.params.filename,filedata:filedata});
      })
    // console.log(req.body);
})
app.get('/edit/:filename', (req, res) => {
    res.render('edit',{filename:req.params.filename})
})
app.post('/edit', (req, res) => {
      fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{
        res.redirect("/");
      })
      // console.log(req.body);
})
    // console.log(req.body);

app.post('/create', (req, res) => {
      fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
      res.redirect("/")
  });
    // console.log(req.body);
})
app.listen(port)