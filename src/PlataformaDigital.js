"use strict"; // evitar más práticas

class PlataformaDigital {
    constructor(nome) {
        this.nome = nome;
        this.assinantes = [];
        this.produtosCadastrados = [];
        this.produtoresCadastrados = [];
        this.generosCadastrados = [];
        this.albunsCadastrados = [];
    }

    getNome() {
        return this.nome;
    }
    getProdutosCadastrados() {
        return this.produtosCadastrados;
    }
    getAssinantes() {
        return this.assinantes;
    }

    setNome(nome) {
        this.nome = nome;
    }
    setAssinantes(assinantes) {
        this.assinantes = assinantes;
    }
    setProdutosCadastrados(produtosCadastrados) {
        this.produtosCadastrados = produtosCadastrados;
    }
}

module.exports = PlataformaDigital;
