"use strict"; // evitar más práticas

class Album {
    constructor(nome, codigo, duracao, ano, qtdMusicas) {
        this.nome = nome;
        this.duracao = duracao;
        this.anoLancamento = ano;
        this.qtdMusicas = qtdMusicas;
        this.musicas = [];
        this.codigo = codigo;
    }

    getNome() {
        return this.nome;
    }
    getQtdMusicas() {
        return this.qtdMusicas;
    }
    getDuracao() {
        return this.duracao;
    }
    getAnoLancamento() {
        return this.anoLancamento;
    }
    getMusicas() {
        return this.musicas;
    }
    getCodigo() {
        return this.codigo;
    }

    setNome(nome) {
        this.nome = nome;
    }
    setQtdMusicas(qtdMusicas) {
        this.qtdMusicas = qtdMusicas;
    }
    setDuracao(duracao) {
        this.duracao = duracao;
    }
    setAnoLancamento(anoLancamento) {
        this.anoLancamento = anoLancamento;
    }
    setMusicas(musicas) {
        this.musicas = musicas;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
}

module.exports = Album;
