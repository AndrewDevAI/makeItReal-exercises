/*Crea una función llamada `caracteresEnComun` que recibe dos argumentos:
`str1` y `str2`. La función debe retornar un arreglo con todos
los caracteres que las dos cadenas tienen en común.
    caracteresEnComun("Hola", "Mundo"); // ["o"]
    caracteresEnComun("German", "Gabriela"); // ["G", "e", "r", "a"]
    caracteresEnComun("Hola", "Bye"); // []

*/

function caracteresEnComun(str1, str2) {
    const result = [];
    /*for (char =0 ; char<str1.length ; char++) */
    for (const char of str1) {
        if (str2.includes(char)) {
            result.push(char);
        }
    }
    return result;
}

console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye"));//[]