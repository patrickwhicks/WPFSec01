//Patrick W. Hicks  4/10/14 Expressions Assignment


//Prompt user for name

var name = prompt("Hello, what is your name?");

console.log(name);

//Promt user for number of clients seen in the last 60 days

var numTours = Number(prompt("How many clients did you meet in the last 60 days, " + name + "?"));

console.log(numTours);

//Prompt user for the amount of volume that they wrote from those clients

var numVolume = Number(prompt("How much volume did you write from those clients, " + name + "?"));

console.log(numVolume);

//Prompt user for the amount of volume that cancelled from those clients

var volCancelled = Number(prompt("How much volume cancelled from those clients, " + name + "?"));

console.log(volCancelled);

//Defining the amount of business that stuck

var goodBusiness = (numVolume-volCancelled); 

var apg = (goodBusiness/numTours); 

console.log(apg);

//Alerting the user to their apg

alert(name + ", your average per guest is: " + apg + "!");