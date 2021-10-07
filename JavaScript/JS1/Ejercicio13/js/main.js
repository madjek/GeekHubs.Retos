// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio13

// Input
let A = parseInt(prompt("Introduzca primer numero"));
let B = parseInt(prompt("Introduzca segundo numero"));
let signo = (prompt("Introduzca signo arifmetico: +, -, *, /, ^, %"));
let res = 0;

// Proceso y calculo
switch (signo) {
   case "+":
      res = A + B;
      break;
   case "-":
      res = A - B;
      break;
   case "*":
      res = A * B;
      break;
   case "/":
      res = A / B;
      break;
   case "^":
      res = Math.pow(A, B);;
      break;
   case "%":
      if (A > B) {
         res = A % B; 
      } else {
         alert("Numero " + A + " no divisible sin resto por " + B)
      }
      break;
   default:
      alert("Signo es incorrecto")
      break;
}
alert("Resultado: " + A + " " + signo + " " + B + " = " + parseFloat(res))