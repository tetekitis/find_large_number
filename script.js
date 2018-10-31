function getVariable() {
	let num1 = parseInt(prompt("first number: "));
	let num2 = parseInt(prompt("second number: "));
	let num3 = parseInt(prompt("third number: "));
	if ( (num1 > num2) && (num1 > num3) ){
document.getElementById('h1id').innerHTML = num1 + " is the greatest";
}
else if ((num2 > num1)  && (num2 > num3)){
document.getElementById('h1id').innerHTML = num2 + " is the greatest"; 
}
else {
	document.getElementById('h1id').innerHTML = num3 + " is the greatest";
	 }
}