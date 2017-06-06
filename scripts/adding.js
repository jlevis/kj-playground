var currentValue = 0;
var add = function(valueToAdd){
	currentValue += valueToAdd;
	document.getElementById('number').innerHTML = currentValue;
};