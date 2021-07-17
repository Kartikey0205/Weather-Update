require("dotenv").config();
const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

//express app
const app = express();

// telling paths of folder to express (middleware)
const static_path = path.join(__dirname, "/public");
const views_path = path.join(__dirname, "/views");
console.log(path.join(__dirname, "/public"));

// setting view engines
app.set("view engine", "ejs");
app.set("views", views_path);

app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404page", {
    errorMsg: "Opps! page not found, Click Here to go back",
  });
});

app.listen(port, () => {
  console.log(`Server is running to the port  ${port}`);
});
