"use strict"; //evitar problemas

class Usuario{
    constructor(nome, codigo){
        this.nome = nome
        this.codigo = codigo
    }

    getNome(){
        return this.nome
    }
    getCodigo(){
        return this.codigo
    }

    setNome(nome){
        this.nome = nome
    }
    setCodigo(codigo){
        this.codigo = codigo
    }
}

module.exports = Usuario