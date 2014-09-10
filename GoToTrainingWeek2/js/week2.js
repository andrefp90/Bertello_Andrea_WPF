/*
Andrea bertello
sept 10 2014
Go to training Week #2
 */
//alert("Testing 1,2,3!");

//Create a calculator for age

//Ask the user their name
var name=prompt("Please type in your name:");

//test
console.log(name);
//Alert to the user and explain what we are doing
alert("Welcome"+name+"! Let's go and figure out how old you are!");
//Ask the user what year they where born
//Create variable to catch the answer
var yearBorn = prompt("What year where you born?");
console.log(yearBorn);

//Current year -year born

var currentYear =2014;

//Calculate the age
var age= currentYear - yearBorn;
//alert the user with their age

alert(name+" you are "+age+" years old.");


