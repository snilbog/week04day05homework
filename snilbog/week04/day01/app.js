var Calc = Calc || {};

Calc = {

	sum : function(a,b){
		return a + b;
	},
	divide : function(a,b){
		return a / b;
	
	},
	sub : function(a,b){
		return a - b;
	},

	Shuffle : function(min,max){
		return Math.floor(Math.random() + (max - min) + min);
	}
}


module.exports = Calc;
