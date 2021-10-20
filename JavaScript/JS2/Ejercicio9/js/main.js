// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio9

// Input
let cant = prompt("Introduzca el cantidad de numeros en array");
let arr = [];
let sum = 0;

const rand = (min, max) => {
    return Math.random() * (max - min) + min;
};

// Proceso y calculo
const calc = () => {
    for (let i = 0; i < cant; i++) {
        arr[i] = parseInt(rand(0, 9));
        sum += arr[i];
        console.log("Numero de array en position " + i + " es: " + arr[i]);
    }
};

// Output
calc();
console.log(arr);
console.log("Suma del array: " + sum);