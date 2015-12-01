var assert = require('assert');

var sum = function(num1, num2) {
	return num1 + num2;
}

assert.strictEqual( sum(1,1), 2, '1 + 1 should equal 2');