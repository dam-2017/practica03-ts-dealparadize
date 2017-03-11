"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena_1 = require("./Cadena");
var Numero_1 = require("./Numero");
//Cadenas
var a = new Cadena_1.Cadena("amoraroma");
console.log(a.cadena);
console.log(a.getNumeroVocales);
console.log("Palindromo: " + a.getEsPalindromo);
console.log("");
a.setCadena = "Hola vamos a contar cosas";
console.log(a.cadena);
console.log("Letras: " + a.getNumeroLetras);
console.log("Palabras: " + a.getNumeroPalabras);
console.log("********************************");
//Numero
console.log("2 + 3 = " + Numero_1.Numero.suma(2, 3));
console.log("2 - 3 = " + Numero_1.Numero.resta(2, 3));
console.log("Factorial(4) = " + Numero_1.Numero.factorial(4));
console.log("Primo(11) = " + Numero_1.Numero.primo(11));
