var animals = [
  {name: 'Bill', type: 'cat'},
  {name: 'Fido', type: 'dog'},
  {name: 'Cujo', type: 'dog'},
  {name: 'Baloo', type: 'bear'},
  {name: 'Mufasa', type: 'lion'}
  ]


var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res) {
  res.render('index', {name:'Billy Bob Thornton'});
});

app.get('/about', function(req, res) {
  res.render('about');
});
//adding an array
app.get('/animals', function(req, res) {
  res.render('animals/index', {myAnimals: animals});
});

app.post('/animals', function(req, res) {
  console.log(req.body);
});

//single animal
app.get('/animals/:idx', function(req, res) {

    var animalIndex = parseInt(req.params.idx);

      res.render('animals/show', {myAnimal: animals[animalIndex]})
});


/* in class work
app.get('/greet/:name/:lastname', function(req, res) {
  res.send('Hello ' + req.params.name + ' ' + req.params.lastname);

});

app.get('/add/:x/:y', function(req, res) {
  res.send('The answer is: ' + (parseInt(req.params.x) + parseInt(req.params.y)));
});
*/

app.listen(3000);

/*
  res.render('index', {name: 'Sterling Archer'});
});

app.get('/about/:greet', function(req, res) {
  // console.log(req);
  // res.send('nothing');
  res.send('<h2>Hi ' + req.params.greet + '!</h2>');
});

app.get('/add/:x/:y', function(req, res) {
  var sum = (parseInt(req.params.x) + parseInt(req.params.y))
  res.send(sum.toString());
});

app.get('/multiply/*', function(req, res) {
  var nums = req.params[0].split('/');
  var result = nums.reduce(function(total, b) {
    return total * parseInt(b);
  }, 1);

  res.send(result.toString());
});

var port = 3000;
app.listen(port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});

*/

