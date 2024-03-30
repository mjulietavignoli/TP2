//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("Ingrese una frase");
let cadAux = [];
if (cadena !== "" && cadena !== null) {
  for (let i = 0; i < cadena.length; i++) {
    cadAux.unshift(cadena[i]);
  }
  alert(cadAux.join(""));
} else {
  alert("No se ingresó ninguna frase");
}
