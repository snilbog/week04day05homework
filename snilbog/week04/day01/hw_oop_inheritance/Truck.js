var Car = require('./Car.js');

function Truck(make, model, year, color, seats, passengers, capacity){
  this.seats = 3;
   if(capacity){
    this.capacity = capacity;
   } else capacity = 0; 
 }

Car.call(this,make, model, year, color, seats, passengers);

}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.Load = function(pounds){
  if(pounds < this.capacity - this.cargo){
    this.cargo += pounds;
    console.log('loaded ' + pounds + 'lbs of cargo');
    return true;
    }
    else {
      this.cargo -= pounds;
    } return false;
  }

Truck.prototype.Unload = function(pounds){
  if(pounds < this.cargo){
    this.cargo += pounds;
    console.log('Took out ' + pounds + 'lbs ')
    return true;
    }
    else {
      this.cargo -= pounds;
      return false;
  }

module.exports = Truck;

