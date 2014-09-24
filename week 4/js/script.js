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

    //Reprompt user
    max = prompt("Please don't leave blank or type in anything than numbers.\nPlease type a max number");

}

//Math Class
//Math.random()- random number between 0 and almost 1
//A random number number between 1-> 10    *10
//What happens when I want a number between 10-> 30
//Math.random() *(max-min) + min
//Math.random() * + 10
//0* 20+10=
//0*20+10+10
//.5*20+10 = 20
//1*20+10=30

//Math Class rounding!
//Math.round(number to round)-normal rounding
//Math.ciel(number to round)-everything goes uo
//Math.floor(number to round)-everything goes down

/*console.log(Math.round(5.6));
console.log (Math.ceil(5.6));
console.log(Math.floor(5.6));

console.log(Math.round(Math.random()*(max-min)+ Number(min));
*/

//Function call
//setiup a variable to cath the returned value

var returnNum =randomizer(min,max);//put in arguments

console.log(returnNum);

//Create a function find a random number
function randomizer(minNum, maxNum){//parameters here

    //code inside of th function-it will only run when th function
    console.log("Inside of function");

    //we need arguments and parameters
    //parameters catch the incoming values of the arguments
    var randNum=(Math.round(Math.random()*(maxNum-minNum)+ Number(minNum));

    //return value
    return randNum;


}

//2nd function call
//catch the return
var secondNum = randomizer(50,100);
console.log(secondNum);
