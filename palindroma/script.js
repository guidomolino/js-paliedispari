
var parola = prompt("Inserisci una parola");

// palindroma:
// come faccio a vedere che è uguale nel verso opposto?
var palindroma = false;

for (var i = 0; i < parola.length; i++) {
  if (parola[i] == parola[parola.lenght - i]) {
    palindroma = true;
  }else {
    palindroma = false;
  }
}

if (palindroma = true) {
  console.log("la parola è palindroma");
}else if (palindroma = false) {
  console.log("la parola non è palindroma");
}
