//Patrick W. Hicks  5/01/14 Functions Assignment

//Prompting user for name

var name = prompt("Hello fellow travelor, what is your name?");

var travelTime = Number(prompt(name + ", how many hours have you been traveling for?"));

var vehicle = Number(prompt("What type of vehicle are you traveling in, " + name + "? \n 1. Car \n 2. Plane \n 3. Millennium Falcon"));

//I am starting my if conditional

if (vehicle === 1) { var speed = 60; } else if (vehicle === 2) {var speed = 600; } else { var speed = 670616629; }
    
    function calcTravel(){
}