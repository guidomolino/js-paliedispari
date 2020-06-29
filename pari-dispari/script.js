
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var numeroUtente = parseInt (prompt ("Inserisci un numero da 1 a 5"));
var sceltaUtente = prompt ("Indovina se uscirà pari o se dispari");

var numeroCpu = getRandomIntInclusive(1,5);


console.log(numeroUtente);
console.log(numeroCpu);

var somma = numeroUtente + numeroCpu;
var sommaIsEven = isEven(somma);

console.log(somma);
console.log(sommaIsEven);

// if (numberIsEven == sceltaUtente) {
//
// }

function isEven(num) {
  if (num%2==0) {
    return true;
  } else {
    return false;
  }
}
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random() * (max-min))+min;
}
