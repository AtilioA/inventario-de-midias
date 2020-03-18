"use strict"; // evitar más práticas
// Módulo File System para leitura de arquivos
const fs = require('fs');
const leArquivoUsuarios = require('../le_usuarios');
const caminhoArquivoUsuario = 'entradas/usuarios.csv';
const { Genero } = require("./Midia.js");


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

    geraRelatorioBackup() {
        // console.log(this.usuarios);
        var stream = fs.createWriteStream("backup.txt");
        stream.once('open', (fd) => {
            //laço que varre usuarios e formata no padrão do backup
            for (usuario in this.usuarios) {
                let conteudo = this.usuarios[usuario];
                stream.write(`${conteudo.id};${conteudo.nome}\n`);
            }

            //fim do arquivo
            stream.end();
        });
    }

    leArquivoGeneros(caminhoArquivoGenero) {
        // Cria string ao ler arquivo CSV local
        var generosCSV = fs.readFileSync(caminhoArquivoGenero, 'utf8');

        // Separa string do csv em quebras de linha
        generosCSV = generosCSV.split("\n");

        // Remove primeiro (header do csv) e último elemento (\n)
        generosCSV.shift();
        generosCSV.pop();

        // generosCSV agora possui apenas os gêneros a serem cadastrados
        var siglasGeneros = [];
        var nomesGeneros = [];
        var i = 0;
        for (i in generosCSV) {
            var separaLinha = generosCSV[i].split(";");
            this.generosCadastrados.push(new Genero(separaLinha[1], separaLinha[0]));
        }
    }

    imprimeGeneros() {
        var i = 0;
        for (i in this.generosCadastrados) {
            console.log(`${this.generosCadastrados[i].getSigla()};${this.generosCadastrados[i].getNome()}`);
        }
    }
}

module.exports = PlataformaDigital;
