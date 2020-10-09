const readlineSync = require('readline-sync');

// Get the total amount of the bill. Wait for the user
const userName = readlineSync.question('Name for the bill? ');
const totalFloat = readlineSync.questionFloat('What is the total amount? $');

// party size
const partySize = readlineSync.questionInt('How many people are in your party? ');

// what % of he tip base on party size
const tipPercentage = readlineSync.questionFloat('What % would you like to tip? ');


// repeat info back to the user

// calculate how much everyone is paying - divide the total amount of the bill pluss tip by the party sizze

//console.log(userName, totalFloat, partySize, tipPercentage);
//console.log(typeof userName, typeof totalFloat, typeof partySize, typeof tipPercentage);