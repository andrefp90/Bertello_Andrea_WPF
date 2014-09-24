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
    console.log(name);
}

alert("Welcome"+" "+name+"! Let's see how much will be your travel budget!");

//Find out how much is the flight
var flight =parseInt(prompt("Please type in how much dose the flight cost? "));
console.log(flight);

//If the user dose not write the answer
while (flight ==="" || isNaN(flight)){

    //Re-prompt the user
    flight= parseInt(prompt("Please don't leave blank.\n Please type in Number"));
    console.log(flight);
}

//ask fos hotel cost
var hotel = parseInt(prompt("How much will the hotel cost?"));
console.log(hotel);

//If the user dose not write the answer
while (hotel ===""||isNaN(hotel) ){

    //Re-prompt the user
    hotel= parseInt(prompt("Please don't leave blank.\n Please type in a number:"));
    console.log(hotel);
}


