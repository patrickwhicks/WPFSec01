
//Expressions - Industry  This is an expression to determine the employment status at my job based upon profitability
var numTours = 50; //This represents the amount of tours a sales representative takes during a 60 day work period
var volWritten = 50000; //This is the amount of volume that the representative wrote during that same 60 day period
var volCancelled = 25000; //This is the amount of sales that were cancelled within that 60 day period
var goodBusiness = volWritten - volCancelled; //This is the amount of business the company could process
var apg = goodBusiness/numTours; //This number (Average Per Guest) represents how profitable the representative is for the company
console.log(apg);