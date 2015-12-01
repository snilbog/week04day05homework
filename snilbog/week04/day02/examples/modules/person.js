
var Person = function(name) {
    this.name = name;
};

var Boat = function(l, w) {
  this.l = l;
  this.w = w;
};

module.exports = {
  'Person': Person,
  'Boat': Boat
};