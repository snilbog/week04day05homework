## IIFEs (or iffys)

Your assignment is simple, since writing out joshsera.Car.prototype.whatever = function() a bajillion times is annoying,
move your Car object into an IIFE. It should look something like this:

```
joshsera.Car = (function () {
	var Car = function() {
		this.name = "This is Josh's car.";
	};

	Car.prototype.whoseCarAmI = function() {
		return this.name;
	};

	return Car;
})();
```

### REMEMBER

One reason IIFEs are useful, is that, declared outside of the function, the variable Car would be visible to other scripts outside of the namespace,
which could cause problems. With he IIFE, you can declare as many variables as you want, and they remain private.