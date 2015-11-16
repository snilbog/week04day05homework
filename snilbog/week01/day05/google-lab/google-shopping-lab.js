//load products.json
var data = require("./products.json")


/*//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};
//DEFINE FUNCTIONS HERE
   var myFunc = function(data) {
   	//do stuff
   	for(var i = 1; i < data.length; i++) {
   	}
   }
//USE FUNCTIONS HERE
getItemsCount(data);
console.log('myFunc results: ' + myFunct(data));
//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));
//create your answer in this file.
//the above is just provided as a simple example.*/

/*var getItems = function(shoppinginfo){
	return shoppinginfo.items.length;
};

var myFunc = function(x) {
	var dataNum = 0;
	 for ( i in data.items) {
	   if (data.items[i].kind == x);
	   	dataNum++;
  }
console.log('number of ' + x + ' is ' + dataNum);
}
myFunc("shopping#product");
*/



 var getItemsByBrand = function(items, brand) {
	var brandItems = [];

	 for ( var i = 0; i < items.length; i++) {
        if (items[i]["product"]["brand"] === brand){
        	brandItems.push(items[i]);
        };
    }
    return brandItems;
}
    

































