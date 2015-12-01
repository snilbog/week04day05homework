var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: false}));

var animals = [
  {name:'Neko',type:'cat'},
  {name:'Fido',type:'dog'},
  {name:'Mufasa',type:'lion'},
  {name:'Tony',type:'tiger'},
  {name:'Kuma',type:'bear'}
];

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/animals', function(req, res) {
  res.render('animals/index', {myAnimals: animals});
});

app.post('/animals', function(req, res) {
  // res.send(req.body);
  animals.push(req.body);
  res.redirect('/animals');
});

app.get('/animals/new', function(req, res) {
  res.render('animals/new');
});

app.get('/animals/:idx', function(req, res) {
  var idx = parseInt(req.params.idx);
  res.render('animals/show', {animal: animals[idx]});
});

//404 page, using Express middleware
app.use(function(req, res, next) {
  res.status(404).send('Error');
  next();
});

var port = 3000
app.listen(port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});
