//Patrick W. Hicks 5/01/14 Function Assignment

//Prompt User for name

var name = prompt("Hello fellow caffine enthusiast!  What is your name?");

var coffee = Number(prompt("How many bags of coffee do you currently have?"));

//Staring the Anonymous Function


var calcCoffee = function(numberEmployees, numberCups, coffeeUsed) {
    var coffeeNeeded = ((numberEmployees * numberCups)/12) * coffeeUsed;
    return coffeeNeeded;
}

//I am invoking the anonumous function

var a = calcCoffee(Number(prompt("How many employees will be drinking coffee today?")), Number(prompt("How many cups of coffee can your tired employees drink each?")), Number(prompt("How many bags of coffee does it take per pot to wake your men up, " + name + "?")));

//I am fixing the decimal point of variable a 

var a = a.toFixed(0);

var goBuy = a - coffee; 

//I am printing the result onto the screen 

console.log("You currently have " + coffee + " bags of coffee, " + name + ".  You will need " + a + " bags of coffee to wake your men up!");

// I am writing a ternary

(coffee >= a) ? console.log("You're well prepared for your work day, " + name + ", now get to brewing!") : console.log("You need to run to the store and get " + goBuy + " bags of coffee, stat!  I think I hear them yawning already!");