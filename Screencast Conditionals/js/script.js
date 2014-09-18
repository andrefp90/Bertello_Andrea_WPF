/*
Andrea Bertello Franco
Screencast conditionals
17 sep 2104
 */
//conditional logic

var kidHeight = 52;
var minHeight = 48;
var wParentHeight =45; // the height of the height with the parent


//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight  > minHeight){
    //you can ride!
    console.log ("You can ride the coaster!");
}else if( kidHeight > wParentHeight){
    //you can ride with a parent present
  console.log("You can ride,but only with a parent present.")
}else{
    //sorry you have growing to do
    ("Sorry kid, you've got some growing to do first!");
}




