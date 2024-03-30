//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let nombres = [];
let edades = [];
let correcto = false;

for (let i = 0; i < 3; i++) {
  let nombre = prompt("Ingrese un nombre");
  while (nombre.trim() === "" || !isNaN(nombre)) {
    nombre = prompt("Ingreso erroneo, por favor ingrese un nombre");
  }
  let edad = prompt("Ingrese una edad");
  while (isNaN(edad) || edad.trim() === "" || edad % 1 !== 0 || edad < 1) {
    edad = prompt("Ingreso erroneo, por favor ingrese un número válido");
  }
  edad = parseInt(edad);
  nombres.push(nombre);
  edades.push(edad);
  if (i === 2) {
    correcto = true;
  }
}
if (correcto === true) {
  let mayor = Math.max(...edades);
  let posicionMayor = edades.indexOf(mayor);
  let nombreMayor = nombres.at(posicionMayor);
  alert(`La persona de mayor edad es ${nombreMayor} cuya edad es ${mayor}`);
}
