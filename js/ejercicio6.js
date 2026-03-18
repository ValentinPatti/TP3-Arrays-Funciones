//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

function calcularPerimetro(ladoA, ladoB) {
  perimetro = 2 * (ladoA + ladoB);
  return perimetro;
}

const ladoA = parseFloat(prompt("Ingrese el valor del primer lado"));
const ladoB = parseFloat(prompt("Ingrese el valor del segundo lado"));

const resultado = calcularPerimetro(ladoA, ladoB);

console.log(`El valor del perimetro es ${resultado}`);
