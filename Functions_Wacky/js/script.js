/**
 Andrea Bertello franco
 25/ sept/2014
 Functions Wacky
 */

//How much tv do you watch in a month and a year

var name=prompt("Please type in your name:");
console.log (name);
while (name ===""){

    //Re-prompt the user
    name= prompt("Please don't leave blank.\n Type in you name:");
    console.log(name);
}

alert("Welcome"+" "+name+"! Let's see how much tv you watch in a year!");

//Anonymous Function to get the result of how many hours
var calcTv = function(hours,days){
    var total= hours*days;
    return total;
}

