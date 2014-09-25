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
console.log(loan);

//if the user forgot to write input
while (loan ===""|| isNaN(loan)){

    //Re-prompt the user
    loan= prompt("Please don't leave blank.\n Type in you name:");
    console.log(loan);
}

//prompt for the interest percentage
var interest = parseInt(prompt("How much is the interest"));
console.log(interest);
//if the user forgot to write input
while (interest ===""|| isNaN(interest)){

    //Re-prompt the user
    interest= prompt("Please don't leave blank.\n Type in the interest:");
    console.log(interest);
}

//divide interest by 100 to get de percentage in decimal
var interestPercentage = interest/100;
console.log(interestPercentage);

//prompt user to see if the loan is in month or years
var yearsMonth=prompt("Is your loan in month or years?");
console.log(yearsMonth);
while (yearsMonth ==="") {

    //Re-prompt the user
    yearsMonth = prompt("Please don't leave blank.\n Type in month or years:");
    console.log(yearsMonth);
}
// if the loan is in months or years
if(yearsMonth==="years") {

    //if years how many years?
    var howYears = parseInt(prompt("For how many years is the loan ?"));
    console.log(howYears);

    //to get the total you multiply the loan times the interest and add it to the loan
    var yearsTotal = (loan * interestPercentage)+loan;
    console.log(yearsTotal);

    //alert user of how much is the total of his loan
    alert("You will pay a total of"+" "+yearsTotal+" "+"to cover your loan");

//else the answer is month
}else if (yearsMonth ==="month") {

    //for how many months is the loan
    var howMonths = parseInt(prompt("For how many months is the loan?"));
    console.log(howMonths);


    //divide the loan with how many months then multiply it by the interest and add it to the loan
    var monthTotal=(loan/howMonths)*interestPercentage +loan;
    console.log(monthTotal);

    //to get how much will have to pay each month the total we divide by the months
    var monthPayment= monthTotal/howMonths;
    console.log(monthPayment);
    //alert user of how much he will pay by month
    alert("You will make monthly payments of"+" "+monthPayment);
}

//function for rounding the result
function roundResults(yearsTotal,monthPayment){
    var roundN = Math.round(yearsTotal||monthPayment);
    //return value
    return roundN;

}




