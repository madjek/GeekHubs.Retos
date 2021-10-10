// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio12

// Input
let cant = prompt("Introduzca el cantidad de numeros en array");
let ult = prompt("Introduzca el ulimo digito del numero");
let arr1 = [];
let arr2 = [];
let min = 0;
let max = 300;
function rand(a, b) {
    return Math.random() * (b - a) + a;
};
// Proceso y calculo
if (ult >= 0 && ult <= 9) {
    for (let i = 0; i < cant; i++) {
        arr1[i] = parseInt(rand(min, max));
        if (arr1[i] % 10 == ult) {
            arr2.push(arr1[i])
        }
    }
} else {
    alert("El numero debe estar entre 0 y 9")
}
// Output
console.log("Array 1: " + "[" + arr1 + "]");
console.log("Array 2: " + "[" + arr2 + "]");