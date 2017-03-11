"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cad) {
        this.cadena = cad.trim();
        this.array = this.cadena.toLowerCase().split("");
    }
    Object.defineProperty(Cadena.prototype, "setCadena", {
        set: function (cad) {
            this.cadena = cad.trim();
            this.array = this.cadena.toLowerCase().split("");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getEsPalindromo", {
        get: function () {
            for (var i = 0; i < this.array.length; i++) {
                if (this.array[i] != this.array[this.array.length - 1 - i])
                    return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getNumeroLetras", {
        get: function () {
            var count = 0;
            this.array.forEach(function (item) {
                if (item != " ")
                    count++;
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getNumeroPalabras", {
        get: function () {
            var count = this.array.length > 0 ? 1 : 0;
            this.array.forEach(function (item) {
                if (item == " ")
                    count++;
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getNumeroVocales", {
        get: function () {
            var count = new Array(0, 0, 0, 0, 0);
            this.array.forEach(function (item) {
                switch (item) {
                    case "a":
                        count[0]++;
                        break;
                    case "e":
                        count[1]++;
                        break;
                    case "i":
                        count[2]++;
                        break;
                    case "o":
                        count[3]++;
                        break;
                    case "u":
                        count[4]++;
                        break;
                }
            });
            return "Cantidad de Vocales " +
                "\n a:" + count[0] +
                "\n e:" + count[1] +
                "\n i:" + count[2] +
                "\n o:" + count[3] +
                "\n u:" + count[4];
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
