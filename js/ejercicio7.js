//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tabla(numero) {
  for (i = 1; i <= 10; i++) {
    resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
  }
  return resultado;
}

const numero = parseInt(prompt("Ingrese un numero"));

const tablaNumeros = tabla(numero);
