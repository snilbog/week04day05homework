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
  res.render('views/index.ejs');
});

app.get('/articles', function(req, res) {
  res.render('views/articles/index.ejs', {myArticles: articles});
});

app.get('/articles/new', function(req, res) {
  res.render('views/articles/new.ejs');
});

app.post('/articles', function(request, response) {
	articles.push(request.body);
	response.redirect('/articles');
});

app.get('/articles/:id', function(req, res) {
	var articleIndex = parseInt(req.rarams.id);
  res.render('views/articles/show.ejs', {myArticle: articles[articleIndex]});
});




app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/animals', function(req, res) {
  res.render('animals/index', {myAnimals: animals});
});

app.get('/animals', function(req, res) {
  res.render('animals/index', {myAnimals: animals});
});







app.listen(3000);