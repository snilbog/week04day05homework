var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function(req, res) {
	request("http://www.omdbapi.com?s=star", function (error, response, body) {
		if (!error && response.statusCode === 200) {
			var data = JSON.parse(body);
			res.render("movie/index", data);
		}
	});
});

module.exports = router;