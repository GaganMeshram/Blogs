const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json())

// DB
// mongoose.set("strictQuery", true);
// mongoose.connect(process.env.MONGO_URI, () => {
//   console.log("Connected to db");
// });

// static files
app.use(express.static("static"));
//CSS
// app.use("/css", express.static(__dirname + "/static/css"));
//IMAGES
app.use("/images", express.static(__dirname + "/static/images"));
// JS FILES
app.use("/js", express.static(__dirname + "/static/js"));

// Templating Engines
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("views", "./views/partials");

// Routes

const newsRouter = require("./src/router/routes");
app.use("/", newsRouter);
app.listen(process.env.PORT || 30, () => {
  console.log("app is running on port 30");
});
