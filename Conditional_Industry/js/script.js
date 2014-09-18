/**
 Andrea Bertello Franco
 18 sept 2014
 Conditional Industry
 */
//Time for a break

    //name and welcome user explain how much will she/he work until he needs a break
var name=prompt("Please type in your name:");
console.log (name);
alert("Welcome"+" "+name+"!Lets see after if you need a break from work!");

//var for time working
var timeWorking = 2;
var timeForBreak;

//prompt user for hours worked
var hoursWorked =prompt(name+" "+"How many hours have you been working?");
console.log("You have worked"+" "+"hours");

//If user forgets to put input remind she/he
if (hoursWorked === ""){
    prompt("oops!!! You forgot to write the answer: Please type in how many hours have you worked");
}
timeForBreak = (timeWorking < hoursWorked)?"You need a break:Get out and stretch your legs":"You've got more work to do"
alert(timeForBreak);









