// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio3

// Input
let num = prompt("Introduzca el numero");
// Proceso y calculo
function primo(num) {
    for(let i = 2; i < num; i++) {
        if (num % i === 0) return "Numero no es primo";            
        }
        return "Numero es primo";   
    } 
// Output
alert(primo(num))