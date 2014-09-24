/**
Andrea Bertello Franco
 22 sept 2014
 Function Worksheet
 */

//Functions Worksheet

//Circumference
var total = calc(3.14,5);

function calc (pi, diameter ){
    var circumference = pi * diameter;
    return circumference;

}
console.log ("The circumference of a circle is"+ total);

//Stung!

var victimsW = beeStings(8.66,1000);

function beeStings (bee , horse){
    var kill = bee * horse;
    return kill;
}

console.log ("It takes"+" "+victimsW+" "+"bee sting to kill a horse");

