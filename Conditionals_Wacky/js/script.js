/**
 Andrea Bertello franco
 18 sept 2014
 Conditionals Wacky
 */

//How many calories do you have left

//name and welcome user explain how much will she/he work until he needs a break
var name=prompt("Please type in your name:");
console.log (name)
alert("Welcome"+" "+name+" "+"!Let's check ot how many calories you have left in a 2000 calorie diet");

//ask the user how many calories have they consumed
var caloriesConsumed =parseInt(prompt(name+" "+"How many calories have you consumed today?"));
console.log("How many calories have you consumed"+" "+caloriesConsumed);

// var for an obligatory breakfast calories
var breakfast = 500;
//daily calories var
var dailyCalories = 2000;

//how many calories do you have left
var caloriesLeft =dailyCalories-( breakfast += caloriesConsumed);
console.log ("You have"+" "+caloriesLeft+" "+"Calories left");

//if the calories and the breakfast is less than 2000

if(breakfast && caloriesConsumed > dailyCalories){
    console.log("You haven't reached the goal you have "+" "+caloriesLeft+" "+"calories left");
    alert(name+" "+"You haven't reached the goal you have "+" "+caloriesLeft+" "+"calories left")
}else{
    console.log("You have over passed your goal!!");
    alert(name+" "+"You have over passed your goal!!");
}












