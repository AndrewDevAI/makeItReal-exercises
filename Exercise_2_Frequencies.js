/*Escribe una función llamada `frecuencias` que reciba una cadena de
texto y retorne un objeto con el número de veces que aparece cada 
caracter (exceptuando el espacio en blanco)
    console.log(frecuencias("hola mundo"));
    // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
    
    console.log(frecuencias("anita lava la tina"));
    // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }*/

function frecuencias(text) {
    const result = {};
    for (const char of text) {
    /*for ( char =0 ; char<text.length; char++)*/ 
        if (char !== " ") {
            if (!result[char]) {
                result[char] = 1;
            } else {
                result[char]++;
            }
        }
    }
    return result;
}

console.log(frecuencias("hola mundo"));
console.log(frecuencias("anita lava la tina"));
