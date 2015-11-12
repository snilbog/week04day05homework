var data = require("./products.json");

var dataNum = 0;
  for (var key in data["items"]) {
    if (data["items"][key]["kind"] == "shopping#product");
    dataNum++;
  }
console.log(dataNum + " " + "shopping#product");
 




for (var key in data["items"]) {
    for (var keys in data["items"][key]["product"]["inventories"]) {
      if (data["items"][key]["product"]["inventories"][keys]["availability"] != 'inStock') {
        console.log(data["items"][key]["product"]["title"]);
      }
    }
  }



for (var key in data["items"]) {
    for (var keys in data["items"][key]["product"]["inventories"]) {
      if (data["items"][key]["product"]["images"].length > 1) {
        console.log(data["items"][key]["product"]["title"]);
      }
    }
  }
 


for (var key in data["items"]) {
      for (var keys in data["items"][key]["product"]["inventories"]) {
        if (data["items"][key]["product"]["brand"] == "Canon") {
          console.log(data["items"][key]["product"]["title"]);
        }
      }
    }
    


for (var key in data["items"]) {
        for (var keys in data["items"][key]["product"]["inventories"]) {
          var seller = data["items"][key]["product"]["author"]["name"];
          var eBay = seller.substring(0,4);
          if (eBay == "eBay" && data["items"][key]["product"]["brand"] == "Canon") {
            console.log(data["items"][key]["product"]["title"]);
          }
 
          }
      }


for (var key in data["items"]) {
  for (var keys in data["items"][key]["product"]["inventories"]) {
    console.log(data["items"][key]["product"]["brand"]);
    console.log(data["items"][key]["product"]["inventories"][keys]["price"]);
    console.log(data["items"][key]["product"]["images"][0]["link"]);
  }
}