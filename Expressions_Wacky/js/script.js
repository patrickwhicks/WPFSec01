//Patrick W. Hicks  4/10/14 Expressions Assignment


//Prompt user for name

var name = prompt("Hello fellow survivor, what is your name?");

console.log(name);

var first = prompt("Great, " + name + "!  \n Now you need to enter your cohorts names, too! \n What is the name of your first friend?");

console.log(first);

var second = prompt("Doing great!  \n Who else will be taking on the zombies with you?");

console.log(second);

var third = prompt("I hope you have more friends than that that have survived! \n Anyone else, " + name + "?");

console.log(third);

var fourth = prompt("And who, " + name + " is the last player in this game of life?");

console.log(fourth);

alert("Unfortunately, " + name + ", " + fourth + " has been bitten whilest cowering in a dark, damp corner.  You never needed " + fourth + " anyway.");

var walkingDead = [ "first", "second", "third", "fourth"];