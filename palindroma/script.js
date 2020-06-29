
var parola = prompt("Inserisci una parola");
var parolaPalindroma = palindrome(parola);


if (parolaPalindroma) {
  console.log("La parola è palindroma");
}else {
  console.log("La parola non è palindroma");
}

// funzione

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

// senza funzione

// var parolaArray = parola.split("");
// console.log(parolaArray);

// palindroma:
// come faccio a vedere che è uguale nel verso opposto?

// var palindroma = true;
// var i = 0;
//
// while (palindroma == true && i != parolaArray.lenght) {
  //   if (parolaArray[i] != parolaArray[parolaArray.length - i]) {
    //     palindroma = false;
    //   }
      //   i++
      // };
      //
      // if (palindroma == true) {
        //   console.log("la parola è palindroma");
        // }else if (palindroma == false) {
          //   console.log("la parola non è palindroma");
          // };
