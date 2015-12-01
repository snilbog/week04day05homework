function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner){
    this.previousOwners.push(this.owner);
    this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
    this.color=newColor;
};

Car.prototype.start = function(){
    this.running=true;
};

Car.prototype.off = function(){
    this.running=false;
};

Car.prototype.driveTo = function(place){
    if(!this.running) return false;
    console.log('driving to '+place)
    return true;
};

Car.prototype.park = function(){
    if(this.running) return false;
    console.log('Parked!!');
    return true;
};

Car.prototype.pickUp = function(who){
    if(!this.running || this.passengers.length+1 >= this.seats) return false;
    console.log('Driving to pick up '+who);
    this.passengers.push(who);
    return true;
};

Car.prototype.dropOff = function(who){
    if(!this.running) return false;
    var whoIndex = this.passengers.indexOf(who);
    if(whoIndex === -1) return false;
    console.log('Driving to drop off '+who);
    this.passengers.splice(whoIndex,1);
    return true;
};

Car.prototype.passengerCount = function(){
    return this.passengers.length;
}


// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;