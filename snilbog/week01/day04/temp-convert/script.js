script.js

 var myInput = document.querySelector("input[type='text']");

var myButton = document.querySelector('button');



myButton.addEventListener("click", onClick);

function onClick(){
  if (myInput.value){
  var f = myInput.value;
  var c = ((f - 32) * (5 / 9)).toFixed(1);
  var myCelcius = document.querySelector('.celcius');
  myCelcius.innerText = c + " \u2103";
  }
}