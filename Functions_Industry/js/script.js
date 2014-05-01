//Patrick W. Hicks 5/01/14 Function Assignment

//Prompt User for name

var name = prompt("Hello fellow caffine enthusiast!  What is your name?");



//Staring the Anonymous Function


var calcCoffee = function(numberEmployees, numberCups, coffeeUsed) {
    var coffeeNeeded = ((numberEmployees * numberCups)/12) * coffeeUsed;
    return coffeeNeeded;
}


var a = calcCoffee(Number(prompt("How many employees will be drinking coffee today?")), Number(prompt("How many cups of coffee can your tired employees drink each?")), Number(prompt("How many bags of coffee does it take per pot to wake your men up, " + name + "?")));


console.log(a);