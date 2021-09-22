var num = prompt('Ingrese el numero');

function primo(num) {
    for(let i = 2; i < num; i++) {
        if (num % i === 0) return 'Numero no es primo';            
        }
        return 'Numero es primo';   
    } 
alert(primo(num))