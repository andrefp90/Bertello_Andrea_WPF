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
console.log ("How much did she/he spend on gas"+" "+gas);

var water = parseInt( prompt("How much is your water bill?"));
console.log ("How much did she/he spend on water"+" "+water);

var electricity=parseInt( prompt("How much is your electricity bill?"));
console.log ("How much did she/he spend on electricity"+" "+electricity);

var phone=parseInt( prompt("How much is your phone bill?"));
console.log ("How much did she/he spend on phone"+" "+phone);

//Add gas, water, electricity and phone with Arrays

var result = [gas,water,electricity,phone];
var total = result[0]+result[1]+result[2]+result[3];
console.log("The total spent in bills"+" "+total);

//Alert how much she/he spends in a month

alert(name+" "+"In a month you spend $"+total+" "+"dollars");

//Calculate how much you have left after paying the bills
var monthEarnings =parseInt(prompt(name+" "+"How much do you earn in a month"));
var moneyLeft =monthEarnings -total;

//Ask if you want to know how much you will have left after paying your bills
var left =prompt("Do you want to know how much you have left after paying your bills? yes or no");
if (left ==="yes"){
    alert(name+" "+"you will have left after paying your bills"+" "+moneyLeft);

}else{
    alert("Thank you!");

}
//Calculate what would be a year
var calculateYear =total*24;

//Ask if you want to know how much you will spend in a year

var year =prompt("Do you want to know how much you spend in a year? yes or no");
if(year ==="yes") {
    alert(name+" "+"In a year you spend $"+calculateYear+" "+"dollars");
}else{
    alert("Thank you! ");

}
















