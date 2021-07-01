// Variables
var travelDistance = parseInt(prompt('Please insert the number of km you have to travel: '));
var passengerAge = parseInt(prompt('Please insert you age: '));
var ticketPriceEachKm = 0.21;
var ticketCost = travelDistance * ticketPriceEachKm;
var youngDiscount = ticketCost * (20 / 100);
var oldDiscount = ticketCost * (40 / 100);
var finalPrice;

if (passengerAge < 18) {
    finalPrice = ticketCost - youngDiscount;
} else if (passengerAge >= 65) {
    finalPrice = ticketCost - oldDiscount;
} else {
    finalPrice = ticketCost;
}

console.log(travelDistance);
console.log(passengerAge);
console.log(ticketPriceEachKm);
console.log(ticketCost);
// console.log(youngDiscount);
// console.log(oldDiscount);
console.log(finalPrice);