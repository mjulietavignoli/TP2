/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/

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
if (numero >= 1 && numero <= 50) {
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(j);
    }
    document.write("<br>");
  }
} else {
  alert(`${numero} no se encuentra entre el 1 y el 50`);
}
