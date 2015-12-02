var express = require("express");
var app = express();

var ejslayouts = require("express-ejs-layouts");
app.use(ejslayouts);

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("index");
});

var peopleCtrl = require("./controllers/people");

app.use("/people", peopleCtrl);

var movieCtrl = require("./controllers/movie");

app.use("/movie", movieCtrl);

var port = process.env.PORT || 3000;

app.listen(port);