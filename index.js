var express = require("express");
var app = express();
const port = 3000;

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})