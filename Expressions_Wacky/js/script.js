//Patrick W. Hicks  4/10/14 Expressions Assignment


//Prompt user for name

var name = prompt("Hello fellow survivor, what is your name?");

console.log(name);

//Prompt for the first friend's name 

var first = prompt("Great, " + name + "!  \n Now you need to enter your cohorts names, too! \n What is the name of your first friend?");

console.log(first);

// Prompt for the second person's name

var second = prompt("Doing great!  \n Who else will be taking on the zombies with you?");

console.log(second);

// Prompt for the third person's name

var third = prompt("I hope you have more friends than that that have survived! \n Anyone else, " + name + "?");

console.log(third);

//Prompt for the fourth person's name 

var fourth = prompt("And who, " + name + " is the last player in this game of life?");

console.log(fourth);

// Alert the user that the fourth has perished 

alert("Unfortunately, " + name + ", " + fourth + " has been bitten whilest cowering in a dark, damp corner.  You never needed " + fourth + " anyway.");

// Defining the array


var walkingDead = [ "first", "second", "third", "fourth"];

console.log(walkingDead);

//Prompting the user to enter the number of zombies

var zombies = prompt("Ok, " + name + ", take a deep breath and look around.  How many zombies can you count?");

console.log(zombies);

//Alerting the user of the impending danger

alert("They are getting closer! Be prepared " + name + ", " + first + ", " + second + ", and " + third + ".");

//Starting to assess the damages 

var nameKilled = prompt("You have been bitten badly, " + name + ", lets hope it was not in vain. \n How many zombies did you kill?");

console.log(nameKilled);

//Prompting the user for the first friend's kill count

var firstKilled = prompt("You did well kid, but we don\'t know for sure yet.  How many zombies did " + first + " kill?");

console.log(firstKilled);

//Prompting the user for the second friend's kill count

var secondKilled = prompt("And what about " + second + "?");

console.log(secondKilled);

//Prompting the user for the third friend's kill count

var thirdKilled = prompt("Please tell me " + third + " held up under pressure? How many did " + third + " take out?");

console.log(thirdKilled);

//Addding the number of zombies taken down

var takenDown = Number(nameKilled) + Number(firstKilled) + Number(secondKilled) + Number(thirdKilled); 

console.log(takenDown);

// Comparing kill count to zombie count

if(takenDown < zombies) alert("Sorry, " + name + ", your team couldn\'t handle the pressure.  You only killed " + takenDown + " of the " + zombies + " zombies that were attacking. \nToo bad you didn\'t have " + fourth + "!  Be prepared to be eaten!");

if(takenDown > zombies) alert("Horray! " + name + ", " + first + ", " + second + ", " + third + ", your names will go down in history!  Even " + fourth + " may even get an honorable mention! \n You sucessfully killed all " + zombies + " zombies that were invading your town!");




