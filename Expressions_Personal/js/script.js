//Patrick W. Hicks  4/10/14 Expressions Assignment

//Prompt user for name

var name = prompt("Hello, what is your name?");

console.log(name);

//Prompt user for their annual income

var income = Number(prompt(name + ", how much do you make a year?"));

console.log(income);

var age = Number(prompt(name + ", how old are you?"));

console.log(age);

var currentYear = Number(prompt(name + ", what is the current year?"));

console.log(currentYear);

var retirementAmount = Number(prompt(name + ", how much money do you want to retire with?"));

console.log(retirementAmount);

var moneySaved = Number(prompt(name + ", what percent of your weekly salary do you put into a savings account or money mutual fund?"));

console.log(moneySaved);

var interestRate = Number(prompt(name + ", what is the interest rate that your account is currently growing at?"));

console.log(interestRate);

var weeklyContribution = (income / 52) * (moneySaved);

console.log(weeklyContribution);

