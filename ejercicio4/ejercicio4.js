//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let cancelar;
let numero;
let sumador = 0;
do {
  numero = prompt("Ingrese numeros");
  while (isNaN(numero) || numero === null || numero.trim() === "") {
    numero=prompt("Error: ingrese un numero nuevamente");
  }
  numero = Number(numero);
  sumador = sumador + numero;
  cancelar = confirm(
    "Si desea continuar pulse Aceptar, caso contrario pulse Cancelar"
  );
} while (cancelar === true);
alert(`La suma de los numeros ingresados es ${sumador}`);
