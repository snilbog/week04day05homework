var Car = require('./Car.js');

//make, model, year, color, seats, passengers
function Motorcycle(make, model, year, color, seats, passengers){
  if(seats > 2){
    seats = 2;
  }
  Car.call(this,make, model, year, color, seats, passengers);

  // Car.apply(this,arguments);

  // if(this.seats > 2){
  //   this.seats=2;
  // }
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function(){
  if(this.running){
    console.log('doing a sick wheelie!!');
    return true;
  }else{
    return false;
  }
}

module.exports = Motorcycle;