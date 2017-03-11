
import { Cadena } from './Cadena';
import { Numero } from './Numero';

//Cadenas
let a = new Cadena("amoraroma");
console.log(a.cadena);
console.log(a.getNumeroVocales);
console.log("Palindromo: "+a.getEsPalindromo);

console.log("");

a.setCadena = "Hola vamos a contar cosas";
console.log(a.cadena);
console.log("Letras: "+a.getNumeroLetras);
console.log("Palabras: "+a.getNumeroPalabras);


console.log("********************************");

//Numero
console.log("2 + 3 = "+Numero.suma(2,3));
console.log("2 - 3 = "+Numero.resta(2,3));
console.log("Factorial(4) = "+Numero.factorial(4));
console.log("Primo(11) = "+Numero.primo(11));


