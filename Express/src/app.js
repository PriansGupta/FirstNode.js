const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const partialsPath = path.join(__dirname, "../public/templates/partials");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../public/templates/views"));
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index", {
    Title: "Weather App",
    Name: "Priyansh Gupta",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    Title: "About",
  });
});

app.get('*',(req,res)=>{
  res.send("My 404 Page")
})

app.listen(3000, () => {
  console.log("Server is Up");
});
