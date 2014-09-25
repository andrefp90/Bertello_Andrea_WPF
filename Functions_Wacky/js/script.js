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
//prompt user for how many hours dose she/he watch tv
var hHours =parseInt(prompt("How many hours do you watch tv in a day?"));
console.log (hHours);

//If the user forgets to put the input
while (hHours===""||isNaN(hHours)){
    //Re-prompt user
    hHours =parseInt(prompt("Please don't leave blank.\nHow many hours do you watch tv in a day?"));
    console.log(hHours);
}

//prompt user to see if he wants to know in year or month
var yearOrMonth =prompt("Do you want to know how much tv you watch in a month or in a year");
console.log(yearOrMonth);

//If the user forgets to put the input
while (yearOrMonth===""){
    //Re-prompt user
    yearOrMonth =parseInt(prompt("Please don't leave blank.\nDo you want to know in a year or a month?"));
    console.log(yearOrMonth);
}

//calculations to see how many hours you watch in total in month or year

var year =calcTv(hHours,360);
console.log(year);

var month =calcTv(hHours,30);
console.log(month);






