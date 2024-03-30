/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let numero;
do {
  numero = prompt("Ingrese un numero del 1 al 50");
} while (
  isNaN(numero) ||
  numero % 1 !== 0 ||
  numero === null ||
  numero.trim() === ""
);
numero = parseInt(numero);
if (numero <= 50 && numero >= 1) {
  for (let i = numero; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write(i);
    }
    document.write("<br>");
  }
} else {
  alert(`${numero} no se encuentra entre el 1 y el 50`);
}
