// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio11

// Input
let cant = prompt("Introduzca el cantidad de numeros para dos arrays");
let arr1 = [];
let arr2 = [];
let arr3 = [];
let min = 0;
let max = 10;
function rand(a, b) {
    return Math.random() * (b - a) + a;
};
// Proceso y calculo
for (let i = 0; i < cant; i++) {
    arr1[i] = parseInt(rand(min, max));
    arr2[i] = parseInt(rand(min, max));
    arr3[i] = arr1[i] * arr2[i];
};
// Output
console.log("Array 1: " + "[" + arr1 + "]");
console.log("Array 2: " + "[" + arr2 + "]");
console.log("Array 3: " + "[" + arr3 + "]");