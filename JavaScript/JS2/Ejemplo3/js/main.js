var num = prompt('Ingrese el numero');

function factorial(num) {
    let result = 1;
    while (num) {
        result *= num--;
    }    
    return result;
}
alert(factorial(num))