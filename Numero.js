"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numero = (function () {
    function Numero() {
    }
    Numero.suma = function (n1, n2) {
        return n1 + n2;
    };
    Numero.resta = function (n1, n2) {
        return n1 - n2;
    };
    Numero.factorial = function (n1) {
        var valor = 1;
        for (var i = n1; i > 1; i--) {
            valor *= i;
        }
        return valor;
    };
    Numero.primo = function (n1) {
        var valor = 0;
        for (var i = 2; i <= n1; i++) {
            if (n1 % i == 0)
                valor++;
        }
        return valor == 1;
    };
    return Numero;
}());
exports.Numero = Numero;
