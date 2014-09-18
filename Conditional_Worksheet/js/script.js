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

//
var mpg = 24.6;
var tankReading =.20
var carCapacity = 16.8;

//Grade letter Calculator
var grade =parseInt(prompt("What is your grade"));
console.log (grade+" "+"grade of student")

var a =90 && 100;
var b =80 && 89;
var letterC =70 && 79;
var d =70 &&72




