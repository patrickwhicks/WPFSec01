//Patrick W. Hicks  4/17/14 Conditionals Assignment


//Prompt user for their name

var name = prompt("Hello! Please enter your name.");

console.log(name);

//Prompt the user for their age and define as a numerical value

var age = Number(prompt("Thanks, " + name + "!  How old are you?"));

console.log(age);

// Defining years left for future need

var yearsLeft = 23 - age;

console.log(yearsLeft);

//Defining conditional if statements for age variable 

if (age < 23) alert("I\'m sorry, " + name + ".  You must be at least 23 years old to tour with Vacation Villiage Resorts. Please return in " + yearsLeft + " years!");

//Defining var maritalStatus if the user is over 23 years old 

if (age >= 23 ) var maritalSatus = Number(prompt("Great!  Are you married, " + name + "? \n 1. Yes \n 2. No"));

console.log(maritalSatus);

//Defining var spouseName if the user is married

if (maritalSatus == 1) var spouseName = prompt("And what is your spouse\'s name, " + name +"?");

//Prompting user to see if spouse will be attending the presentation

if (maritalSatus == 1) var bothAttending = Number(prompt("Will " + spouseName + " be attending the presentation with you? \n 1. Yes \n 2. No"));

//Alerting user to company stipulations that forces them both to attend

if (bothAttending == 2) alert("I\'m sorry, " + name + ", due to company regulations, " +spouseName + " must also attend the presentation.  Please schedule a date and time when you both are availible." );

//Defining var income for the outcome

if (bothAttending == 1 || maritalSatus == 2 ) var income = Number(prompt("What is your annual household income?"));

