// CircleMath.js external file used with Circle2.html for calculation
function circleCalc() {
	var validUserValue; //Declare variable but leave empty.
	
	do {
	try {
		// Code to get and verify value
		var userValue = prompt("Enter the Diameter of your circle");
		if(userValue === null) throw "No value entered";
		if(userValue === "") throw "No value was entered";
		if(isNaN(userValue)) throw "Number not entered.";
		if(userValue <= 0) throw "Not a positive nnumber";
		// If it gets this far, there are no errors.
		validUserValue = true;
	}
	
	catch(err) {
		// This code will run if there is an error.
		userMessage = "Invalid input : " + err;
		alert(userMessage);
		validUserValue = false;
	}
	finally {
		console.log("User entered >" + userValue + "< and validUserValue is: " + validUserValue);
	}
	}
	while (validUserValue == false); // If false, go to start of loop.
	
	// Formulas for Circle computations
	var c_Diameter = parseFloat(userValue);
	var c_Radius = c_Diameter / 2;
	var c_Circumference = 2* Math.PI * c_Radius;
	var c_Area = Math.PI * Math.pow(c_Radius,2);
	
	// Insert value into the HTML document.
	document.getElementById("circleDiameter").innerHTML = "Diameter : " + c_Diameter;
	document.getElementById("circleRadius").innerHTML = "Radius : " + c_Radius;
	document.getElementById("circleCircumference").innerHTML = "Circumference : " + c_Circumference.toFixed(4);
	document.getElementById("circleArea").innerHTML = "Area : " + c_Area.toFixed(4);
	
}
// * * * * * E N D _ O F _ P A G E * * * * *