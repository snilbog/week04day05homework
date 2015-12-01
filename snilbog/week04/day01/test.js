var assert = require('assert');

var Calc = require('./app.js');



assert.strictEqual(
	Calc.sum(5,3), 8, '5 + 3 should equal 8');

assert.strictEqual(
	Calc.divide(10,2), 5, '10/2 should be 5');

assert.strictEqual(
	Calc.sub(10,9), 1, '10-9 should be 1')

var num = Calc.Shuffle(1, 10);
assert(num <= 10 && num >= 1, 'random number between 1-10');