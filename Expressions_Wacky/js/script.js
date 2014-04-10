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

var zombies = prompt("Ok, " + name + ", take a deep breath and look around.  How many zombies can you count?");

console.log(zombies);

alert("They are getting closer! Be prepared, " + name + ", " + first + ", " + second + ", and " + third + ".");

var nameKilled = prompt("You have been bitten badly, " + name + ", lets hope it was not in vain. \n How many zombies did you kill?");

var firstKilled = prompt("You did well kid, but we don\'t know for sure yet.  How many zombies did " + first + " kill?");

var secondKilled = prompt("And what about " + second + "?");

var thirdKilled = prompt("Please tell me " + third + " held up under pressure? How many did " + third + " take out?");



