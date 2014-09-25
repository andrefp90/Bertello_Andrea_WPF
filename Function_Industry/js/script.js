/**
 Andrea Bertello franco
 25 sep 2014
 Functions Industry
 */

//loan for a project

// welcome the user, ask their name and inform what this is about

var name=prompt("Please type in your name:");
console.log (name);
while (name ===""){

    //Re-prompt the user
    name= prompt("Please don't leave blank.\n Type in you name:");
    console.log(name);
}

alert("Welcome"+" "+name+"! Let's see how much you will have to pay for your loan!");

//prompt for how much was the loan
var loan =parseInt(prompt("How much did you ask for the loan?"));
console.log(loan)

//if the user forgot to write input
while (loan ===""|| isNaN(loan)){

    //Re-prompt the user
    loan= prompt("Please don't leave blank.\n Type in you name:");
    console.log(loan);
}

