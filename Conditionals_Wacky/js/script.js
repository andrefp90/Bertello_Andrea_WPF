/**
 Andrea Bertello franco
 18 sept 2014
 Conditionals Wacky
 */

//How many calories do you have left

//name and welcome user explain how much will she/he work until he needs a break
var name=prompt("Please type in your name:");
console.log (name);
alert("Welcome"+" "+name+" "+"!Let's check ot how many calories you have left in a 2000 calorie diet" +
    " starting with a 500 calorie breakfast");

//ask the user how many calories have they consumed
var caloriesConsumed =parseInt(prompt(name+" "+"How many calories have you consumed today?"));
console.log("How many calories have you consumed"+" "+caloriesConsumed);

//If user forgets to put input remind she/he
if (caloriesConsumed=== ""){
    ("oops You forgot to write the answer: Please type in how many calories have you consumed");
}
// var for an obligatory breakfast calories
var breakfast = 500;
//daily calories var
var dailyCalories = 2000;

//how many calories did the user over passed
var overPassed = ( breakfast + caloriesConsumed)% dailyCalories;
//how many calories do you have left

var caloriesLeft =dailyCalories-( breakfast += caloriesConsumed);

if(caloriesLeft < dailyCalories) {
    console.log("You have" + " " + caloriesLeft + " " + "Calories left");
}else if (caloriesLeft >= dailyCalories){
    console.log("How many calories did the user over passed by " + " " + overPassed);
}
//if the calories and the breakfast is less than 2000

if(breakfast && caloriesConsumed < dailyCalories){
    console.log("You haven't reached the goal you have "+" "+caloriesLeft+" "+"calories left");
    alert(name+" "+"You haven't reached the goal you have "+" "+caloriesLeft+" "+"calories left");
//if the count is over 2000
}else{
    console.log("You have over passed your goal!!");
    alert(name+" "+"You have over passed your goal by"+" "+overPassed+" "+"calories");
}














