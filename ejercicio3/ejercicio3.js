//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenasConcatenadas = "";
let cancelar;
let cadena;
do {
  cadena = prompt("Ingrese una frase");
  if (cadena !== null && cadena.trim() !== "") {
    if (cadenasConcatenadas !== "") {
      cadenasConcatenadas += " - ";
    }
    cadenasConcatenadas += cadena;
  }
  cancelar = confirm(
    "Si desea continuar pulse Aceptar, caso contrario pulse Cancelar"
  );
} while (cancelar === true);

if (cadenasConcatenadas !== "") {
  alert(cadenasConcatenadas);
} else {
  alert("No se ingresaron cadenas.");
}
