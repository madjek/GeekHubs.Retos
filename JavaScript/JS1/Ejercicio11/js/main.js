// Ejercicios JavaScript

/*
Autor: Yevhenii Madzhar
Version: 1.0
*/

// ____________________________________________________
// Ejercicio11

// Input
let dia = (prompt("Introduzca el dia"));
// Proceso y calculo
switch (dia) {
   case "lunes":
   case "martes":
   case "miercoles":
   case "jueves":
   case "viernes":
      alert(dia + " es dia laboral");
      break;
   case "sabado":
   case "domingo":
      alert(dia + " es dia libre");
      break;
   default:
      alert("Dia de la semana esta mal escrito")
      break;
}