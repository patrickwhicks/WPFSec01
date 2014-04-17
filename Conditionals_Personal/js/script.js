//Patrick W. Hicks  4/17/14 Conditionals Assignment


//Prompt user for their name

var name = prompt("Hello future miner!  What is your name?");

console.log(name);

//Prompt user for the bitcoin mining current difficulty rating

var difficulty = Number(prompt(name + ", what is the current bitcoing mining difficulty level?"));

console.log(difficulty);

//Prompt user for the hash rate of their hardware

var gH = Number(prompt("What is your current hardware's hash rate, " + name + "?"));

console.log(gH);

//Translating gH to rational number

var hashRate = Number((gH * 1000000000));

console.log(hashRate);

//Calculating the amount of time to find one share

var shareTime = ((difficulty * 4294967296) / hashRate);

console.log(shareTime);

//Prompting user for the current bitcoin block level

var btcBlock = Number(prompt(name + ", how many bitcoins come in a block currently?"));
                      
console.log(btcBlock);

//Figureing out how many bitcoins their computer will mine in one day

var dailyShare = ((86400 / shareTime) * btcBlock);

console.log(dailyShare);

var btcValue = Number(prompt("What is the current value of one Bitcoin, " + name + "?"));

console.log(btcValue);

