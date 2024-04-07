/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

let numero;
let cancelar;

do {
  numero = prompt("Ingrese un DNI");
  while (isNaN(numero) || numero % 1 !== 0 || numero === null) {
    numero = prompt("Por favor, ingrese un DNI válido");
  }
  numero = parseInt(numero);
  if (numero >= 0 && numero <= 99999999) {
    let indice = numero % 23;
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letra = letras.charAt(indice);
    alert(`La letra es: ${letra}`);
  } else {
    alert("El número de DNI debe estar entre 0 y 99999999");
  }
  cancelar = confirm(
    "Si desea continuar pulse Aceptar, caso contrario pulse Cancelar"
  );
} while (cancelar === true);
