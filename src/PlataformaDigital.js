"use strict"; // evitar más práticas
const fs = require('fs');
const leArquivoUsuarios = require('../le_usuarios');
const caminhoArquivoUsuario = 'entradas/usuarios.csv';

class PlataformaDigital {
    constructor(nome) {
        this.nome = nome;
        this.usuarios = leArquivoUsuarios(caminhoArquivoUsuario);
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

    backUp(){
        // console.log(this.usuarios);
        var stream = fs.createWriteStream("backup.txt");
        stream.once('open', (fd) => {
            //laço que varre usuarios e formata no padrão do backup
            for (usuario in this.usuarios){
                let conteudo = this.usuarios[usuario];
                stream.write(`${conteudo.id};${conteudo.nome}\n`);
            } 
            
            //fim do arquivo
            stream.end();
        });
    }
}

module.exports = PlataformaDigital;
