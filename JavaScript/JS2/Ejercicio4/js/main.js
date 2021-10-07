// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio4

// Input
var num = prompt('Introduzca el numero');
// Proceso y calculo
function factorial(num) {
    let result = 1;
    while (num) {
        result *= num--;
    }    
    return result;
}
// Output
alert(factorial(num))