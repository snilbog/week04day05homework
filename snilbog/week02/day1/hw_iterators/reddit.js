var reddit = require("./data.json")
//console.log(reddit.data)


//1. `forEach` -  `console.log` all titles

var reddit = require("./data.json")

var myFunc = function(thing) {
 	thing.name = items;
	console.log(titles);
}

reddit.data.children.titles.forEach(myFunc)



//************************************************


//2. `map` - Return an array of permalinks, append `http://reddit.com` to each so that they contain full http:// path to reddit'


var reddit = require("./data.json")


var newArray = reddit.data.children.map(function(links) {
	return links.href("http://reddit.com");
});



//***************** filter ********************
//3. `filter` - Filter the posts that contain actual text in the  `selftext` key


var reddit = require("./data.json")

var newArray = reddit.data.children.selftext.filter(function(person) {
	if () {
	return text;
	}
});

console.log(newArray);



//****************  Reduce   ***************

//4. `reduce` - Use reduce to count all the `score` values across posts


var reddit = require("./data.json")


var score = function(value) {
	return ;
}

var sum = reddit.reduce(add);




console.log(reddit["data"]);