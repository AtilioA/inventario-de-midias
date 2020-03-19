"use strict"; // evitar más práticas
const Usuario = require("./Usuario.js");


class Produtor extends Usuario {
    constructor(nome, codigo) {
        super(nome, codigo);
        this.produtosDesenvolvidos = [];
        this.favoritado = 0;
    }

    getNome() {
        return this.nome;
    }
    getCodigo() {
        return this.codigo;
    }
    getProdutosDesenvolvidos() {
        return this.produtosDesenvolvidos;
    }
    getFavoritado() {
        return this.favoritado;
    }

    setNome(nome) {
        this.nome = nome;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    setProdutosDesenvolvidos(produtosDesenvolvidos) {
        this.produtosDesenvolvidos = produtosDesenvolvidos;
    }

    inserirProduto(produto){
        this.produtosDesenvolvidos.push(produto);
    }
}

module.exports = Produtor;
