// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio2

// Input
let A = parseInt(prompt("Introduzca primer numero"));
let B = parseInt(prompt("Introduzca segundo numero"));
let cantidad = parseInt(prompt("Introduzca cantidad de numeros"));
function rand(min, max) {
    return Math.random() * (max - min) + min
};
// Proceso y calculo
for (let i = 1; i <= cantidad; i++) {
    console.log(i + " numero aleatorio entre " + A + " y " + B + " : " + parseInt(rand(A, B))) 
}