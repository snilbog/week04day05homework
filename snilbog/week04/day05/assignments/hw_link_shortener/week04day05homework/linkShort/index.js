var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./models/index.js');
var models = require('./models');
var Hashids = require('hashids'),
  hasdids = new Hashids('linkShort', 7);


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.render('index');
});


app.get('/new/:id', function (req, res) {
  var id = parseInt(request.params.id);
  db.user.find({where: {id: id}}).then(function (users) {
    response.render('new', {users: users});
  });
});


app.post('/', function (req, res){
  var newUrl = request.body.url;
  var newUser = {
    url: newUrl
  };
  db.user.create(newUser).then(function (link){
    link.hash = hashids.encode(link.id);
    link.save().then(function (newLink){
      response.redirect('/new/' + newLink.id);
    });
  });
});

app.get('/count', function (req, res) {
  db.user.findAll({order: '"count" desc'}).then(function (count){
    response.render('count', {count: count});
  });
});



app.listen(3000, function() {
  console.log("You're listening to the smooth sounds of port 3000 in the morning");
});
