//Andrea Bertello Franco 11 september 2014 Expressions Worksheet

//Dog years
// Calculate sparky's age in dog years
var dogAgeInHuman = 3;
var dogAgeInDog = 7;

//multiply dog age in human * dog age in dog

var sparkyAge = dogAgeInHuman * dogAgeInDog;
// var for console print out
var result1 = ("Sparky is"+" "+dogAgeInHuman);
var result2 =(" human years old which is"+ " "+sparkyAge);
var result3 = ("in dog years");
var final = ""+ String (result1)+" "+String(result2)+" "+String(result3);
//print out “Sparky is X human years old which is X in dog years.
console.log (final);

//slice of pie part 1

//given
var slicesPizza =8;
var numberOfPeople = 20;
var pizzasOrdered = 4;

//multiply slices od pizza * pizzas ordered
var numberOfSlices = slicesPizza * pizzasOrdered;
var pizzaPerPearson = numberOfSlices/numberOfPeople;

// var for console print log
var first =("Each person ate"+" "+ pizzaPerPearson);
var second =("slices of pizza at the party");
var final2 =""+String(first)+" "+String (second);

//print Each person ate x slices of pizza at the party
console.log (final2);

//slice of pie part 2

//Result variables
var numberOfSlicesSparkyGets ;

// Number of slices - number of people
var remainder = numberOfSlices - numberOfPeople ;

//var for console print log

var ab =("Sparky got "+" "+remainder);
var ba =("slices of pizza")
var abc =""+String(ab)+" "+String(ba);
//print for console
console.log (abc);

//Average shopping bill

//Expressions with Arrays

var weekSpent =[40, 50, 70, 60, 35];

var total = weekSpent[0]+weekSpent[1]+weekSpent[2]+weekSpent[3]+weekSpent[4];

//Divide the total by 5

var average = total / 5;

// var for console print log

var primero =("You have spent a total of $"+" "+total);
var segundo =("on groceries over weeks.That is an average of $"+ " "+average);
var tercero = ("per week");

var juntos =""+String(primero)+" "+String (segundo)+" "+(tercero);
console.log (juntos);

//Discounts

//Var

var originalPrice = 40;
var discountPercentage =.20;
var taxPercentage =6.5;


