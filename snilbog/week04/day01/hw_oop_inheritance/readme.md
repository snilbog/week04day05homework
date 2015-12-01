![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

#Car lab 2

Cars are great and all, but now it's time to extend this app and make it handle more types of vehicles.

##Part 1 -- Motorcycles

Create a new constructor called `Motorcycle` that extends your `Car` contstructor. Add the following features using **TDD**.

This should be done in the file called `Motorcycle.js` which requires `Car.js` to function. Additionally your `test.js` will need to require `Motorcycle.js` (already done for you).

Tests are provided for the Motorcycle.

A `Motorcycle`...

* Must be an instanceof `Motorcycle`
* Must be an instanceof `Car`
* Cannot have more than 2 seats (constructor)
* Should be able to `wheelie()` but only if running. Return true and console.log `"Doing a sick wheelie!!"` on success otherwise return false.

##Part 2 -- Trucks

Create a new constructor called `Truck` that extends `Car`. Add the following features using **TDD**

This should be done in a new file called `Truck.js` which will need to require `Car.js` to function and export the constructor (similar to what's done in `Motorcycle.js`). Additionally your `test.js` will need to require `Truck.js`

####Basic Truck

A `Truck` must be an instanceof `Truck` and `Car`.

It should have the following constructor parameters:

* make
* model
* year
* color

It should default to 3 seats.

####Handling Cargo

Our truck needs to be able to load and unload cargo.

Add an optional constructor parameter for `capacity` this is the amount of weight in pounds the truck can carry. This should just default to 0 if not provided.

Add 2 methods to the `Truck` prototype.

* `Load(pounds)` should take a weight in pounds and increase the amount of cargo the truck is carrying IF loading the additional weight won't put it over capacity. Should console.log `"loaded <pounds>lbs of cargo."` and return true if successful and false if the cargo couldn't be loaded (over capacity)
* `Unload(pounds)` should take a weight in pounds and decrease the amount of cargo the truck is carrying and return true. However, if the amount of pounds is greater than the amount of cargo on the truck it should not reduce the cargo and should return false.


##Bonus: Creating Tests

This is a great way for validating the behavior of your new Truck. The process should be as follows

1. Read each feature below and think about what it's asking for.
2. Create a test (in test.js) to test the feature
3. Run the test
4. Write / revise code (in Motorcycle.js/Truck.js) to pass test, if necessary
5. Repeat 3 and 4 until you pass all tests
6. Move on to the next feature (start back at step 1)

