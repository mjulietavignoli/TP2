//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad;
do {
  edad = prompt('Ingrese su edad');
  if(isNaN(edad) || edad==='' || edad===null || edad!==Number.isInteger(Number(edad))){ 
    document.write('Ingrese un número entero');
    break;
  } else{
    edad=parseInt(edad);
    if (edad >= 18) {
        alert('Puede conducir');
      } else {
        alert('Debe ser mayor de 18 años para conducir');
      }
  }
} while (true);