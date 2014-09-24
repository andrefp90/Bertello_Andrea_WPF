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

//Test to make sure min is a number
//isNaN()
//- is what's inside Not a Number?'

console.log(isNaN(7)); //false if it is a number
console.log(isNaN("monkey"));//text gives us a true

while(isNaN(min)){
    //Reprompt user
    min=prompt("Only type in number\nPlease type in a min number:");

}


//Ask the user for a max number

var max= prompt("Please type in a max number:");
//validate that prompt
//best way so far to validate -combine the while loops

while(max==="" || isNaN(max) ){
    // && both have to be true to be true
    // || one or both have to be true

    //REPROMPT THE USER
    max = prompt("Please don't leave blank or type in anything than numbers.\nPlease type a max number");

}