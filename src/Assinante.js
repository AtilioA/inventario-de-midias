"use strict"; // evitar más práticas
const Usuario = require("./Usuario.js");

class Assinante extends Usuario {
    constructor(nome, codigo) {
        super(nome, codigo);
        this.favoritos = [];
    }

    getFavoritos() {
        return this.favoritos;
    }

    setFavoritos(favoritos) {
        this.favoritos = favoritos;
    }
}

module.exports = Assinante;
