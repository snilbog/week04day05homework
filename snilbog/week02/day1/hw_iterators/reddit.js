var reddit = require("./data.json")
//console.log(reddit.data)


//1. `forEach` -  `console.log` all titles

var reddit = require("./data.json")

var items = reddit.data.children;
console.log('All titles');
console.log(".........");

items.forEach(function (item) {
	console.log(item.data.children);
});
//************************************************


//2. `map` - Return an array of permalinks, append `http://reddit.com` to each so that they contain full http:// path to reddit'


var reddit = require("./data.json")

console.log(" ");
console.log("....");
var linked = items.map(function(item) {
	return "http://reddit.com" + item.data.permalink;
	return "http://reddit.com" + item['data']['permalink'];
 });



//***************** filter ********************
//3. `filter` - Filter the posts that contain actual text in the  `selftext` key

console.log(linked.join(","));

console.log("\nFiltered items with selftext");
console.log( "............");

var filtered = items.filter(function(item) {
	return item.data.selftext.length;
});

console.log(filtered.length+" < "+items.length);



//****************  Reduce   ***************

//4. `reduce` - Use reduce to count all the `score` values across posts


console.log("\nTotal score across posts");
console.log("...........");

var totalScore = items.reduce(function(total, nextItem) {
	return total + nextItem.data.score;
}, "");

console.log("total score: "+ totalScore);


console.log(reddit["data"]);










