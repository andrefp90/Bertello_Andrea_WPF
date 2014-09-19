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

//Grade letter calculator

var aPlus= 95<100;
var A= 90<94;
var bPlus =85<89;
var b =80<84;
var cPlus= 76<79;
var C =73<75;
var D= 70<72;
var F= 0<69;
var grade =prompt("what is your grade percentage?");
console.log(grade);
var gradeLetter;

if (grade<aPlus){
    console.log("your grade is A+")

}else if(grade<A){
    console.log("your grade is A")
}

//Check the login

var userName=prompt("Please type in your username");
console.log(userName);
var password=prompt("Please type in your password");
console.log(password);

var correctUser=prompt("Please type in your username");
console.log(correctUser);

var correctPassword=prompt("Please type in your password");
console.log(correctPassword);

if(userName ===correctUser){

}else if(password===correctPassword){
    alert ("Welcome")
}
if (userName||correctUser){
    alert("user not found")
}else if(password||correctPassword){
    alert("Password incorrect")
}








