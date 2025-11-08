const f = require('fs');
f.readFile("har.txt",(err)=>{
    if(err) console.log("none");
    else console.log("done")
})