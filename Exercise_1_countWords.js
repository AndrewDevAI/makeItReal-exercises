/*Escribe una función llamada numDuplicados 
que reciba un string y retorne el número de caracteres que aparecen más de una vez.


console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0 
*/



function numDuplicados(string) {
    // Crear un objeto para contar las apariciones de cada caracter
     caracteres = {};
    for ( i = 0; i < string.length; i++) {
         char_i = string[i];
        if (caracteres[char_i]) {
            caracteres[char_i]++;
        } else {
            caracteres[char_i] = 1;
        }
    }
    // Contar el número de caracteres que aparecen más de una vez
     contador = 0;
    for ( char_i in caracteres) {
        if (caracteres[char_i] > 1) {
            contador++;
        }
    }
   
    console.log(contador)
}
//numDuplicados("annnnannn")

console.log(numDuplicados("abcaa")); 
console.log(numDuplicados("abab"));
console.log(numDuplicados("abc"));





