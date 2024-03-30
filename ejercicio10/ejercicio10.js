//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = prompt("Ingrese el numero de filas");
let columnas = prompt("Ingrese el numero de columnas");

if (isNaN(filas || isNaN(columnas))) {
  alert("Ingrese un numero válido");
} else {
  filas = parseInt(filas);
  columnas = parseInt(columnas);
  let multiplicacion = filas * columnas;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      document.write(multiplicacion);
      document.write(' ');
      multiplicacion--;
    }
    document.write("<br>");
  }
}
