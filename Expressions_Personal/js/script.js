/**
Andrea Bertello Franco
11 September 2014
 Expressions Personal
 */

//My personal Expression will calculate how much I spend in a month

// Introduction to the user ask for name and welcome them telling them what will do

var name=prompt("Please type in your name:");
console.log (name)
alert("Welcome"+" "+name+"! Let's find out how much you spend in a month!");

// Prompt to get answer of gas, water, electricity and phone
var gas= parseInt (prompt ("How much do you spend on gas?"));

console.log (gas);

var water = parseInt( prompt("How much is your water bill?"));
console.log (water);

var electricity=parseInt( prompt("How much is your electricity bill?"));
console.log (electricity);

var phone=parseInt( prompt("How much is your phone bill?"));
console.log (phone);

//Add gas, water, electricity and phone with Arrays

var result = [gas,water,electricity,phone];
var total = result[0]+result[1]+result[2]+result[3];
console.log(total);

//Alert how much she/he spends in a month

alert(name+" "+"In a month you spend $"+total+" "+"dollars");

//Ask if you want to know how much you will spend in a year

var year =prompt("Do you want to know how much you spend in a year? yes or no");










