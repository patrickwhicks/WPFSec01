//Patrick W. Hicks  4/17/14 Conditionals Assignment


//Prompting user for name

var name = prompt("Hello fellow prankster, what is your name?");

console.log(name);

//Validating users input

if (name === "") {alert("You need to enter the information please!"); var name = prompt("Hello fellow prankster, what is your name?"); }

//Prompting the user to see how much money he wants to spend

var money = Number(prompt("How many dollars are you willing to spend on this prank, " + name + "?"));

console.log(money);

//Prompting the user for the victim's office width

var officeWidth = Number(prompt("How wide is your boss' office in feet?"));

console.log(officeWidth);

//Prompting the user for the victim's office length

var officeLength = Number(prompt("How long is your boss' office in feet?"));

console.log(officeLength);

//Prompting the user for the victim's office height

var officeHeight = Number(prompt("How tall is your boss' office in feet?"));

console.log(officeHeight);

//Defining the area of the boss' office

var officeArea = (officeLength * officeWidth * officeHeight);

console.log("Your boss' office will require " + officeArea + " square feet of packaging peanuts.");
var peanuts = Number(prompt("How much does a square foot of packaging peanuts cost at your local office supply store?"));
                     
console.log(peanuts);

//defining cost of prank

var cost = (officeArea * peanuts);

//Using ternary coding to test the outcome

(cost > money) ? console.log("You may want to just egg his house, " + name + "!  Filling his office with packaging peanuts will cost you $" + cost + ".") : console.log("Go for it, " + name + "! You can always blame it on that guy from accounting!");


console.log(cost);

