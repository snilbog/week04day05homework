## Lab: Namespaces

Your assignment is to make a copy of your car homework from last night, and move it into a namespace.

The namespace should be your name, for example: joshsera.Car. You should also add a property called name, which will be unique to
your, personal car.

```
var joshsera = {
	Car: function() {
		this.name = "This is Josh's car.";
	}
};
```

You then should add a function called whoseCarAmI() to the prototype:

```
joshsera.Car.prototype.whoseCarAmI = function() {
	return this.name;	
};
```

### REMEMBER

You should remove the 

```
module.exports = Car;
```

line to make sure it works in a browser.

## BONUS

Get your neighbor's car script, include both your script and your neighbor's script on a page, and print the result of both Car.whoseCarAmI() methods to a div. Feel free to use jQuery to make DOM manipluation easy.