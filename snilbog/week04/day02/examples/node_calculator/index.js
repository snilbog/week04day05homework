var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
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