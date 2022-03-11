const express = require("express");
const path=require('path')

const app = express();

app.use(express.static(path.join(__dirname,'../public')))

app.get("", (req, res) => {
  res.send('<h1>HOME</h1>');
});

app.get("/About", (req, res) => {
  res.send('<h1>About</h1>');
});
app.get("/Help", (req, res) => {
  res.send("Help Page");
});
app.get("/Weather", (req, res) => {
  res.send("Weather Page");
});

app.listen(3000,()=>{
    console.log("Server is Up")
})