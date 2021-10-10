// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio10

// Input
let cant = prompt("Introduzca el cantidad de numeros en array");
let arr = [];
let min = 0;
let max = 100;
function rand(a, b) {
    return Math.random() * (b - a) + a;
};
// Proceso y calculo
function primo(n) {
    for(let i = 2; i < n; i++) {
        if (n % i === 0) return "false";            
        } return "true";   
    };
for (let i = 0; i < cant; i++) {
    let pos = parseInt(rand(min, max));
    if (primo(pos) === "true") {
        arr.push(pos);
    } else {i--};
};
let mayor = Math.max.apply(Math, arr);
// Output
console.log(arr);
console.log("Mayor numero de array es: " + mayor);