function Car(make, model, year, color, seats){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  //TODO: add year, color, seats here

  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
}

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(){
	this.running = true;
};

Car.prototype.off = function(){
	this.running = false;
};

Car.prototype.driveTo = function(place){
	if(this.running){
		console.log("Driving to" + place);
		return true;
	}
	else if(this.off){
		return false;
	}
}

* `Car.park()` only if the car is not running you should console.log `parked!!`. 
Should return true if it is successful and false if it is not.





// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;