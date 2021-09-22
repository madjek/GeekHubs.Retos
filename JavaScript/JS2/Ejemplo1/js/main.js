const pi = 3.1416;
var figura = prompt('Selecciona circulo, cuadrado o triangulo');

if (figura === 'circulo') {
    let r = prompt('Que radio de circulo?');
    S = pi * r ** 2;
    alert('Area de circulo = ' + S)
}

if (figura === 'cuadrado') {
    let c = prompt('Que ancho de cuadrado?');
    S = c ** 2;
    alert('Area de cuadrado = ' + S)
}

if (figura === 'triangulo') {
    let t = prompt('Que ancho de triangulo?');
    S = t**2 * Math.sqrt(3) / 4;
    alert('Area de triangulo = ' + S)
}