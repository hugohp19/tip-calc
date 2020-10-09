const readlineSync = require('readline-sync');

// Get the total amount of the bill. Wait for the user
const userName = readlineSync.question('Name for the bill? ');
const totalFloat = readlineSync.questionFloat('What is the total amount? $');

// party size
const partySize = readlineSync.questionInt('How many people are in your party? ');

// what % of he tip base on party size
const tipPercentage = readlineSync.questionFloat('What % would you like to tip? ');

// repeat info back to the user
console.log(`Name of the Order: ${userName}`);
console.log(`Sub-Total: $${totalFloat.toFixed(2)}`);
console.log(`Party Size: ${partySize}`);

// calculate how much everyone is paying - divide the total amount of the bill pluss tip by the party size
if(partySize < 6){
    console.log(`Tip amount: ${tipPercentage}%`);
    let porcentange = (totalFloat * (tipPercentage / 100));
    let totalAmountWithTip = (totalFloat + porcentange);
    console.log(`The tip is: $${porcentange.toFixed(2)}`);
    console.log(`Total: $${totalAmountWithTip.toFixed(2)}`);
    let amountPerPerson = (totalAmountWithTip / partySize).toFixed(2);
    console.log(`Total amount per person: $${amountPerPerson}`);
} else {
    console.log(`There is a mandatory 18% tip with parties larger than 5.`);
    let porcentange = (totalFloat * 0.18);
    let totalAmountWithTip = (totalFloat + porcentange);
    console.log(` The tip is: $${porcentange.toFixed(2)}`);
    console.log(`Total: $${totalAmountWithTip.toFixed(2)}`);
    let amountPerPerson = (totalAmountWithTip / partySize).toFixed(2);
    console.log(`Total amount per person: $${amountPerPerson}`);
}

//console.log(userName, totalFloat, partySize, tipPercentage);
//console.log(typeof userName, typeof totalFloat, typeof partySize, typeof tipPercentage, typeof porcentange, typeof totalAmountWithTip);