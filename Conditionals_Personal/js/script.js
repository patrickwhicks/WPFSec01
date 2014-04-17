//Patrick W. Hicks  4/17/14 Conditionals Assignment


//Prompt user for their name

var name = prompt("Hello future miner!  What is your name?");

console.log(name);

//Prompt user for the bitcoin mining current difficulty rating

var difficulty = Number(prompt(name + ", what is the current bitcoing mining difficulty level?"));

console.log(difficulty);

//Prompt user for the GH/s level of their hardware

var gH = Number(prompt("What is your current hardware's GH/s level, " + name + "?"));

console.log(gH);
