script.js



/*
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
} */



***********Class Notes********************

var convert = function(fTemp) {
	return (fTemp = 32) * (5/9);
	};

	document.addEventListener('DOMContentLoaded'), function() {
	var inputField = document.getElementById('temperature');
	var celsiusDiv = document.getElementById('convertedTemp');

	document.getElementById('clear').addEventLlistener('click', function(e) {
		inputField.value = '';
		celsiusDiv.innerHTML;

	});
	
	document.getElementById('temperatureForm').
	addEventListener('submit', function(e) {
	e.preventDefault();
	celsiusDiv.innerHTML = convert(inputField.value) + "&deg;";

	});
});    