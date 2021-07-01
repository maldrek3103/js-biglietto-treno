// Variables
var travelDistance = parseInt(prompt('Please insert the number of km you have to travel: '));
var passengerAge = parseInt(prompt('Please insert you age: '));
var ticketPriceEachKm = 0.21;
var ticketCost = travelDistance * ticketPriceEachKm;
var youngDiscount = ticketCost * (20 / 100);
var oldDiscount = ticketCost * (40 / 100);
var finalPrice;

// Ticket final price 

// Validation
if ((!isNaN(travelDistance) && !isNaN(passengerAge)) && (travelDistance > 0 && passengerAge > 0)) {

    if (passengerAge < 18) {
        finalPrice = ticketCost - youngDiscount;
    } else if (passengerAge >= 65) {
        finalPrice = ticketCost - oldDiscount;
    } else {
        finalPrice = ticketCost;
    }

} else {

    document.getElementById("warning").innerHTML = 'Hai inserito valori non validi, per favore riprova!';

}

// Display only 2 decimals
finalPrice = finalPrice.toFixed(2);


// Insert datas into the HTML file
document.getElementById("distance").innerHTML = 'Distanza da percorrere: ' + travelDistance + ' Km';
document.getElementById("age").innerHTML = 'Età del passeggero: ' + passengerAge + ' Anni';
document.getElementById("price-km").innerHTML = 'Prezzo biglietto al km: ' + ticketPriceEachKm + ' Euro';

// Display datas into HTML based on the age 
if (passengerAge >= 18 && passengerAge <= 65) {
    document.getElementById("ticket-cost").innerHTML = 'Prezzo intero: ' + ticketCost + ' Euro';
} else {
    document.getElementById("final-price").innerHTML = 'Prezzo ridotto: ' + finalPrice + ' Euro';
}







console.log('Distanza da percorrere: ' + travelDistance + ' Km');
console.log('Età del passeggero: ' + passengerAge + ' Anni');
// console.log(ticketPriceEachKm);
// console.log(ticketCost);
// console.log(youngDiscount);
// console.log(oldDiscount);
console.log('Prezzo finale del biglietto: ' + finalPrice + ' Euro');