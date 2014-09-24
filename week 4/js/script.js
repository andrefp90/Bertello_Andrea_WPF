/**
 Andrea Bertello franco
 24 sept 2104
 week 4
 */

//Create a function that will take a min and max number and return
//a random number in between

//Ask user for min number

var min= prompt("Let's get a random number between 2 numbers.\n Please type in the minimum number");

//Validate the user prompt

while (min ===""){

    //Re-prompt the user
    min= prompt("Please don't leave blank.\n Type a number:");
}

console.log(min);