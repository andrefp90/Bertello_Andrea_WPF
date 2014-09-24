/**
 Andrea Bertello franco
 25 sept 2014
 Functions Personal
 */

//Functions Personal

//Travel budget/
// welcome the user, ask their name and inform what this is about


var name=prompt("Please type in your name:");
console.log (name);
while (name ===""){

    //Re-prompt the user
    name= prompt("Please don't leave blank.\n Type in you name:");
}

alert("Welcome"+" "+name+"! Let's see how much will be your travel budget!");

//Find out how much is the flight
var flight =parseInt(prompt("Please type in how much dose the flight cost? "));
console.log(flight);
