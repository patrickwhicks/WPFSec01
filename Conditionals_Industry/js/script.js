//Patrick W. Hicks 4/17/2014 Conditionals Assignment

//I am prompting the user for their name

var name = prompt("Hello future guest!  What is your name?");

console.log(name);

//I am promting the user for their age

var guestAge = Number(prompt("How old are you, " + name + "?"));

console.log(guestAge);

if (guestAge <= 22) { console.log("I'm sorry, " + name + ", you do not match the age requirements to  tour with our company."); } else {

//I am prompting the user for their houshold income

var income = Number(prompt("What is your household income? \n 1. $10,000 - $35,000 \n 2. $36,000 - $55,000 \n 3. $56,000 - $85,000 \n 4. $86,000 +"));

console.log(income);

//If the income level is less than 35,000, the client will not be able to come
    
if (income < 2) { console.log("I'm sorry, " + name + ", you do not match the income requirements to tour with our company.");
                } else {
                    
//I am prompting the user for their martial status

var maritalSatus = Number(prompt("Are you married, " + name + "?  \n 1. Yes \n 2. No"));

console.log(maritalSatus);

//I am prompting the user to see if their spouse will be attending the presentation

if (maritalSatus === 1) {var bothAttending = Number(prompt("Will your spouse be attending the presentation with you? \n 1. Yes \n 2. No"));
                        }

//If the guest is married, they cannot attend the presentation unless their spouse attends as well

                        if (maritalSatus === 1 && bothAttending === 2) {console.log("I'm sorry, " + name + ".  Due to company regulations, you are unable to schedule a presentation until your spouse is able to attend as well.");


                        } else if (bothAttending === 1) {console.log("Congratulations! We would love to invite you to come visit us!");
                                                        }
if (maritalSatus === 2) {console.log("Congratulations! We would love to invite you to come visit us!");
                                         
                                                        
                        }
                }}
