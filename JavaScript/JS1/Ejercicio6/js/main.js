// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio6

// Input
const IVA = 21;
let pre = parseFloat(prompt("Introduzca precio de producto"));
// Proceso y calculo
let fin = pre + pre * IVA / 100;
// Output
alert("Precio con IVA = " + (fin))