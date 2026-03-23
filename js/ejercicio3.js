//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const apariciones = new Array(13).fill(0); //crea un arreglo de 13 posiciones y el .fill(0) inicializa en 0 las posiciones
for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1; // Math.random() * 6 da un número entre 0 y 5.99...
  let dado2 = Math.floor(Math.random() * 6) + 1; // Math.floor(...) + 1 lo convierte en un entero entre 1 y 6.

  let suma = dado1 + dado2;
  apariciones[suma]++;
}

console.log("Resultados de las sumas tras 50 lanzamientos:");
for (let s = 2; s <= 12; s++) {
  console.log(`Suma ${s}: ${apariciones[s]} veces`);
}
