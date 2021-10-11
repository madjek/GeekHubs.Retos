// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio10

// Input
let suma = 0;
let numVentas = parseInt(prompt("Introduzca numero de ventas"));
// Proceso y calculo
for (let n = 1; n <= numVentas; n++) {
   suma = suma + parseFloat(prompt("Introduzca valor de venta " + n));
}
alert("Suma de todas las ventas: " + suma);