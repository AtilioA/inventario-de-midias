"use strict"; // evitar más práticas
const Midia = require("./Midia.js");


class Podcast extends Midia {
    constructor(tipo, nome, codigo, genero, qtdTemporadas, duracao, ano) {
        super(tipo, nome, codigo, genero, duracao, ano);
        this.qtdTemporadas = qtdTemporadas;
    }

    getQtdTemporadas() {
        return this.qtdTemporadas;
    }
    getTipo() {
        return "P";
    }
    getTemporada() {
        return this.qtdTemporadas;
    }

    setQtdTemporadas(qtdTemporadas) {
        this.qtdTemporadas = qtdTemporadas;
    }

}

module.exports = Podcast;
