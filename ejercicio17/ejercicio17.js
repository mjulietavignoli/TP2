//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
let cadena = prompt("Ingrese una frase");
if (cadena !== null) {
  cadena = cadena.toLowerCase();
  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena[i] === "a" ||
      cadena[i] === "e" ||
      cadena[i] === "i" ||
      cadena[i] === "o" ||
      cadena[i] === "u" ||
      cadena[i] === "á" ||
      cadena[i] === "é" ||
      cadena[i] === "í" ||
      cadena[i] === "ó" ||
      cadena[i] === "ú" ||
      cadena[i] === "ü"
    ) {
      alert(`La primera vocal es la posicion está en la posicion ${i}`);
      break;
    }
  }
} else {
  alert("No se ingresó ninguna frase");
}
