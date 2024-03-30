let cadena = prompt("Ingrese una frase");
if (cadena !== "" && cadena !== null) {
  cadena = cadena.toLowerCase();
  let sumador = 0;

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
      sumador++;
    }
  }
  if (sumador === 1) {
    alert(`La frase tiene ${sumador} vocal`);
  } else {
    alert(`La frase tiene ${sumador} vocales`);
  }
} else {
  alert("No se ingresó ninguna frase");
}
