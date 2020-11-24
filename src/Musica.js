"use strict"; // evitar más práticas
const Midia = require("./Midia.js");

class Musica extends Midia {
  constructor(tipo, nome, codigo, genero, duracao, anoLancamento) {
    super(tipo, nome, codigo, genero, duracao, anoLancamento);
  }

  getAlbum() {
    return this.album;
  }
  getTipo() {
    return "M";
  }

  setAlbum(album) {
    this.album = album;
  }
  setAnoLancamento(anoLancamento) {
    this.anoLancamento = anoLancamento;
  }
}

module.exports = Musica;
