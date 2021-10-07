// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio12

// Input
let att = 0;
let pass = "password123";
let psw = document.getElementById("psw");
// Proceso y calculo
function validate() {
      if (att < 3) {
         if(psw.value == pass) {
            alert("Access allowed. Congratulations!")
         } else {
            alert("Wrong password. " + (2-att) + " attempts left");
         }
      } else {
         alert("Access DENIED. Try in a few minutes")
      }
      att++
}