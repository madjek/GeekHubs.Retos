// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio7

// Input
let eur = parseFloat(prompt("Introduzca el cantidad de euros"));
let div = (prompt("Introduzca la divisa: libra, dolar o yen"));
// Proceso y calculo
let lib = eur * 0.86;
let dol = eur * 1.286;
let yen = eur * 129.852;
switch (div.toLowerCase()) {
   case "libra":
    alert(eur + " euro es: " + lib + " libras");
      break;
   case "dolar":
    alert(eur + " euro es: " + dol + " dolares");
      break;
   case "yen":
    alert(eur + " euro es: " + yen + " yenes");
      break;
   default:
      alert("Divisa esta mal escrita")
      break;
}
// Output