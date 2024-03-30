/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/

let numero;
do {
  numero = prompt("Ingrese un numero del 1 al 30");
  if (numero === null || numero.trim() === "") {
    alert("Debe ingresar un número");
  }
} while (numero === null || numero.trim() === "");
if (!isNaN(numero) && numero !== "" && numero % 1 === 0) {
  numero = parseInt(numero);
  if (numero >= 1 && numero <= 30) {
    for (let i = 1; i <= numero; i++) {
      document.write("<br>");
      for (let j = 1; j <= i; j++) {
        document.write(i);
      }
    }
  } else {
    alert(`${numero} no se encuentra en el rango del 1 al 30`);
  }
} else {
  alert("Carga erronea, ingrese un numero entero del 1 al 30");
}
