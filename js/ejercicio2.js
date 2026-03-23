/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

const ciudades = [];

while (true) {
    let ciudad  = prompt('Ingresa el nombre de una ciudad')
    if (ciudad === null) {
        break;
    }
    if (ciudad.trim() !== "") {
        ciudades.push(ciudad.trim());
    }
}

console.log(ciudades)

document.writeln(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`)

document.writeln('<ul>')
document.writeln(`<li>En 1ra posicion: ${ciudades[0]}</li>`)
document.writeln(`<li>En 3ra posicion: ${ciudades[2]}</li>`)
document.writeln(`<li>En ultima posicion: ${ciudades[ciudades.length - 1]}</li>`)

ciudades.push('Paris')

document.writeln(`<li>En ultima posicion se agrego: ${ciudades[ciudades.length - 1]}</li>`)
document.writeln(`<p>El arreglo de ciudades ahora tiene ${ciudades.length} elementos</p>`)

document.writeln(`El elemento en segunda posicion es ${ciudades[1]}, que será reemplazado por Barcelona`)

ciudades[1] = 'Barcelona'

document.writeln(`<p>Ahora el arreglo se verá asi ${ciudades}</p>`)