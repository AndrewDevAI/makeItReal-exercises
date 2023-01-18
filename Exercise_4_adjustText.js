/*Escribir una función llamada `ajustarTexto` que reciba dos argumentos:
un string y un número (que representa una longitud).
La función debe retornar la cadena ajustada a la longitud recibida.
Si la longitud de la cadena es mayor al número, debes recortar la cadena.
De lo contrario agrega espacios en blanco hasta completar la longitud.

    console.log("${ajustarTexto("", 3)}") // " " 
    console.log("${ajustarTexto("hola", 2)}") // "ho" 
    console.log("${ajustarTexto("Hola", 0)}") // "" 
    console.log("${ajustarTexto("Hola", 5)}") // "Hola "

*/

function ajustarTexto(text, length) {
    if (length <= 0) return "";
    if (text.length > length) {
        return text.substr(0, length);
    } else {
        return text + " ".repeat(length - text.length);
    }
}

console.log(`${ajustarTexto("", 3)}`)  // " " 
console.log(`${ajustarTexto("hola", 2)}`) // "ho" 
console.log(`${ajustarTexto("Hola", 0)}`) // "" 
console.log(`${ajustarTexto("Hola", 5)}`) // "Hola "
