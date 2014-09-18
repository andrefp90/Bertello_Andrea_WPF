/**
 Andrea Bertello Franco
 18 sep 2014
 Conditionals Personals
 */

//What to wear depending on temperature

//welcome the user, ask their name and inform what this is about
var name=prompt("Please type in your name:");
console.log (name)
alert("Welcome"+" "+name+"! Let's see what you should wear!");

//different temperatures to see is it's warm or cold

var warm = 75;
var notTooCold = 60;


//prompt for temperature
var temperature= prompt("What is the temperature");
console.log ("The temperature is"+ " "+temperature+" "+"degrees celsius");

//If the temperature is grater than 90 it's too hot
if(temperature >warm ){
    alert("It's too hot you should wear something light a dress or shorts")

}




