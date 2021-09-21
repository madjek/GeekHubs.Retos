// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio6

// Input
const IVA = 21;
var pre = parseFloat(prompt("Introduzca precio de producto"));
// Proceso y calculo
let fin = pre/ 100 * IVA + Number(pre);
// Output
alert('Precio con IVA = ' + parseFloat(fin))