//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad;
do {
  edad = prompt("Ingrese su edad");
  while (isNaN(edad) || edad % 1 !== 0 || edad.trim() === '') {
    edad = prompt("Carga erronea, ingrese nuevamente su edad");
  }
  edad = parseInt(edad);
  if (edad >= 18) {
    alert("Puede conducir");
  } else {
    alert("Debe ser mayor de 18 años para conducir");
  }
} while (edad!==null);
