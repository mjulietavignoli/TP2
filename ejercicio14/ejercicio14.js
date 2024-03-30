//14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let cadena = prompt("Ingrese una frase");
let cadAux = [];

for (let i = 0; i < cadena.length; i++) {
  if (i === cadena.length - 1) {
    cadAux.push(cadena.at(i));
  } else {
    cadAux.push(cadena.at(i) + "-");
  }
}
cadAux = cadAux.join("");
alert(cadAux);
