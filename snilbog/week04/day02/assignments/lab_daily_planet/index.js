var articles = [
  {title: 'How to Eat', body: 'Open mouth, devour!'}
  {title: 'How to Drink', body: 'Open can. Put to mouth. Gulp!'}
  {title: 'How to Live', body: 'Eat, Drink, party and dance.'}
  {title: 'How to Breathe', body: 'In through the nose, out through the mouth. Long and deep (5 seconds).'}
  {title: 'How to Code', body: 'Go to GA.'}
];


var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('index.ejs');
});

app.get('/articles', function(req, res) {
	var searchTerm= req.query.q;

  res.render('articles/index.ejs', {myArticles: articles, searchTerm: searchTerm});

});

app.get('/articles/new', function(req, res) {
  res.render('articles/new.ejs');
});


app.get('/articles/:idx', function(req, res) {
	var articleIndex = parseInt(req.rarams.idx);
	if (idx < articles.length && idx >= 0) {
  res.render('articles/show.ejs', {article: articles[req.params.idx]});
} else {
	res.send('Error');
}
});

app.post('/articles', function(req, res) {
	articles.push(request.body);
	res.redirect('/articles');
});


app.get('/about', function(req, res) {
  res.render('about.ejs');
});

app.listen(3000);


