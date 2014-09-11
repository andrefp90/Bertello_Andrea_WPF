/**
Andrea Bertello Franco
 11 September 2014
 Expressions Wacky
 */
    //Expressions Wacky calculating your height: how many body's your height would fit in a soccer field

// Prompt for name and Introduction
var name=prompt("Please type in your name:");
console.log (name);
alert("Welcome"+" "+name+"! Let's find out how many body's your height fit in a soccer field!");

//Prompt for the user height
var height=parseInt(prompt(name+" "+"What is your height in feet?"));
console.log ("The height of the user"+" "+height+ "ft");

//Area of a soccer field when the soccer field is 110 long and 64 wide and convert it to feet
var area = (110 * 64)*3;
console.log ("The area of the soccer field"+" "+area+"ft");

//divide the height by the area
var bodyInSoccerField = area / height ;
console.log (bodyInSoccerField+" "+"Is the number that"+" "+name+" "+"would fit in one soccer field");

//Alert the user of the result
alert(name+" " +"Your height is"+" "+height+"ft so"+" "+bodyInSoccerField+" " +
    ""+name+ "'s fit in a soccer field!! ");

//Alert user thank you
alert(name+" "+"Thank you!! For using Wacky expression");










