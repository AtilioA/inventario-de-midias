"use strict"; // evitar más práticas
const Produtor = require("./Produtor.js");


class Artista extends Produtor {
    constructor(nome, codigo, albuns) {
        super(nome, codigo);
        this.albuns = albuns;
    }

    getAlbuns() {
        return this.albuns;
    }

    setAlbuns(albuns) {
        this.albuns = albuns;
    }
}

module.exports = Artista;
