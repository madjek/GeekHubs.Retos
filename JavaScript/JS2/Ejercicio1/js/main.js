// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio1

// Input
const PI = 3.1416;
let figura = prompt('Selecciona circulo, cuadrado o triangulo');
// Proceso y calculo
switch (figura) {
    case "circulo":
        let r = prompt('Que radio de circulo?');
        S = PI * r ** 2;
        alert('Area de circulo = ' + S)
        break;
    case "cuadrado":
        let c = prompt('Que ancho de cuadrado?');
        S = c ** 2;
        alert('Area de cuadrado = ' + S)
        break;
    case "triangulo":
        let t = prompt('Que ancho de triangulo?');
        S = t**2 * Math.sqrt(3) / 4;
        alert('Area de triangulo = ' + S)
        break;
    default:
        alert("Figura esta incorrecta")
        break;
}