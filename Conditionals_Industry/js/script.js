//Patrick W. Hicks  4/17/14 Conditionals Assignment


//Prompt user for their name

var name = prompt("Hello! Please enter your name.");

console.log(name);

//Prompt the user for their age and define as a numerical value

var age = Number(prompt("Thanks, " + name + "!  How old are you?"));

console.log(age);

var yearsLeft = 23 - age;

console.log(yearsLeft);

if (age < 23) alert("I\'m sorry, " + name + ".  You must be at least 23 years old to tour with Vacation Villiage Resorts. Please return in " + yearsLeft + " years!");

if (age >= 23 ) var maritalSatus = Number(prompt("Great!  Are you married, " + name + "? \n 1. Yes \n 2. No"));

console.log(maritalSatus);