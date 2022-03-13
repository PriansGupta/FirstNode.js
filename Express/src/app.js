const express = require("express");
const path = require("path");

const app = express();

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, "../public")));
app.set('views', path.join(__dirname, '../public/views'));


app.get('',(req,res)=>{
  res.render('index',{
    Title:"Weather App",
    Name:"Priyansh Gupta"
  })
})

app.listen(3000, () => {
  console.log("Server is Up");
});
