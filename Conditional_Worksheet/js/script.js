/**
 Andrea Bertello franco
 Conditional Worksheet
 18 sep 2014
 */

//Celsius to Fahrenheit converter

    //How many degrees will the user want to convert
var  userDegrees =parseInt(prompt("How many degrees would you like to calculate?"));
console.log (userDegrees+" "+"Degrees user wants to convert ");

//convert celsius to fahrenheit
var degreesC = (userDegrees * 9 /5)+32;
var degreesF = (userDegrees -32)* 5/9;

//Ask user what would she/he prefer celsius or fahrenheit
var cOrF =prompt("If you would like to convert celsius to fahrenheit write c otherwise an f");
if (cOrF === "c"){
    alert("The temperature is"+" "+degreesC+" "+" degrees celsius");
}else{
    alert("The temperature is"+" "+degreesF+" "+" degrees fahrenheit")
}

//Last chance for gas

//var for mpg car capacity and your tank percentage
var mpg = 24.6;
var carCapacity = 16.8;
var yourCarFuel = parseInt (prompt("How much percentage of your gas tank do you have left "));
console.log(yourCarFuel);

var fuelLeft = carCapacity-(carCapacity*(yourCarFuel/100));
console.log ("You have"+" "+fuelLeft+" "+"fuel left");

var milesTankGas = (mpg *fuelLeft)- 200;
console.log (milesTankGas);

if(milesTankGas > 200){
    alert("Yes, you can make it without stopping for gas!");
}else if (milesTankGas < 200){
    alert("You only have"+" "+fuelLeft+" "+"gallons of gas in your tank")
}









