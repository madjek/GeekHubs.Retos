// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio7

// Input
let num = 1;
// Proceso y calculo
while (num <= 100) {
    console.log("while " + num)
    num++
}
// ____________________________________________________
// Ejercicio8

// Proceso y calculo
for (let num1 = 1; num1 <= 100; num1++) {
    console.log("for " + num1)
}
// ____________________________________________________
// Ejercicio9

// Proceso y calculo
for (let num2 = 1; num2 <= 100; num2++) {
    if ((num2 % 2 == 0) && (num2 % 3 == 0)) {
        console.log(num2 + " - div por 2 y 3");
    }
}