/**
Andrea Bertello Franco
 11 September 2014
 Expressions Industry
 */

//Expressions Industry How much will you earn as a freelance in one project

//Ask the user their name
var name=prompt("Please type in your name:");
//test
console.log(name);
//Alert to the user and explain what we are doing
alert("Welcome"+" "+name+"! Let's find out how much will you earn with a freelance project!");

//Ask what it's she/he rate per hour
var chargePerHour =parseInt(prompt(name+" "+"How much do you charge per hour?"));
console.log ("Rate per hour"+" "+chargePerHour);

//Ask how many hours did she/he work
var hoursWorked = parseInt(prompt(name+" "+"How many hours did you work on the project"));
console.log ("Hours worked"+" "+hoursWorked);

//Multiply the rate per hour times the hours worked
var result = chargePerHour *= hoursWorked;
console.log("The total earned is $"+result);

//Alert the user of how much wil she/he earn
alert(name+" "+"you will earn $"+result+" "+"dollars");

//Alert to thank the user
alert(name+" "+ "Thank you!!");





