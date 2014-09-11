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
console.log(yearBorn);
//alert the user with their age

alert(name+" you are "+age+" years old.");

//Let's make this more complex
//How old will the user be in the feature

//Ask the user how many years in th future we should look

var yearsMore = prompt("How many years in the future would you like to know");
console.log(yearsMore);

//calculate the future age
//age + yearMore

//Casting - treating one variable as another
//Number(); put variable inside of ()
var futureAge = age + Number(yearBorn);
console.log(futureAge);

//Make the results pretty

console.log("You will be"+futureAge+" in "+ yearsMore+"more years.");
alert("You will be"+futureAge+" in "+ yearsMore+"more years.");

//Ask if you want

var wantDog =prompt("Doyou want a dog? Yes or No");

if(wantDog ==="yes") {
    var breed = prompt("What breed do you want?");
}else{
    console.log("That's sad, dogs are adorable! ");
}