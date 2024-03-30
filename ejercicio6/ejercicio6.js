/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/

let numero = prompt("Ingrese un numero del 1 al 30");
if (isNaN(numero) || !Number.isInteger(Number(numero))) {
  document.write("Ingrese un numero entero");
} else {
  numero = parseInt(numero);    
  if (numero >= 1 && numero <= 30) {
    for (let i = 1; i <= numero; i++) {
        document.write("<br>");
      for (let j = 1; j <= i; j++) {
        document.write(i);      
      }
    }
  }
}
