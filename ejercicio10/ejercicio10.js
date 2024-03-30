//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = prompt("Ingrese el numero de filas");
while (isNaN(filas) || filas.trim() === "" || filas%1!==0) {
  filas = prompt("Ingrese un numero válido");
}
let columnas = prompt("Ingrese el numero de columnas");
while (isNaN(columnas) || columnas.trim() === "" || columnas%1!==0) {
  columnas = prompt("Ingrese un numero válido");
}

filas = parseInt(filas);
columnas = parseInt(columnas);
let multiplicacion = filas * columnas;
for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {
    document.write(multiplicacion);
    document.write(" ");
    multiplicacion--;
  }
  document.write("<br>");
}
