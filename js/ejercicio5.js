//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function verificarMayus(texto) {
  if (texto === texto.toUpperCase()) {
    return "la cadena solo tiene mayúsculas";
  } else if (texto === texto.toLowerCase()) {
    return "la cadena solo tiene minúsculas";
  } else {
    return "la cadena es una mezcla de ambas";
  }
}

const texto = prompt("Ingrese el texto");
const verificacion = verificarMayus(texto);

console.log(verificacion);
