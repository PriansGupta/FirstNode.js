const express = require("express");
const yargs = require("yargs");
const search = require("./Search");
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
    Title: "Weather",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    Title: "About",
  });
});

app.get("/about/*", (req, res) => {
  res.render("Error", {
    Data: "Nothing about found",
  });
});
app.get("/Search", (req, res) => {
  if (!req.query.address) return res.send("Please provide an Address");

  const response = search.Search(req.query.address);
  console.log(response);
  // res.send();
});

app.get("*", (req, res) => {
  res.render("Error", {
    Data: "No such Page Found",
  });
});

app.listen(3000, () => {
  console.log("Server is Up");
});
