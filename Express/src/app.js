const express = require("express");
const path = require("path");
const hbs=require('hbs')

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../public/templates"));

app.get("", (req, res) => {
  res.render("index", {
    Title: "Weather App",
    Name: "Priyansh Gupta",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    Title: "About",
    Footer: "Created by: Priyansh Gupta",
  });
});
app.listen(3000, () => {
  console.log("Server is Up");
});
