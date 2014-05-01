//Patrick W. Hicks 5/01/14 Personal Functions

//Prompting the user for their name

var name = prompt("Hello! What is your name?");

//Prompting the user for the shape of the pool

var poolShape = Number(prompt(name + ", pick the shape of your pool. \n 1. Rectangle \n 2. Circular"));

//Starting the else if conditional

if (poolShape === 1) { var width = Number(prompt("What is the width of your pool?")); 
                    var length = Number(prompt("What is the length of your pool?"));
                    var depth = Number(prompt("What is the average depth of your pool?"));
                    var gallons = ((length * width * depth) * 7.48);
                    
                    //Printing the result to the console
                    console.log(name + ", you will need " + gallons + " gallons of water to fill your new pool!");
    
                     } //Defining the else if portion of the conditional
else if (poolShape === 2) { var radius = Number(prompt("What is the radius of your pool?"));
                            var depth = Number(prompt("What is the average depth of your pool?"));
                            var gallons = (3.14 * (radius * radius) * depth) * 7.48; 
                            var gallons = gallons.toFixed(0);
                           //Printing the result to the console
                           console.log(name + ", you will need " + gallons + " gallons of water to fill your new pool!");
                          }
                                                  