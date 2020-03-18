"use strict"; // evitar más práticas
// Módulo File System para leitura de arquivos
const fs = require('fs');
const { Genero } = require("./Midia.js");
const Artista = require("./Artista.js");
const Podcaster = require("./Podcaster.js");
const Assinante = require("./Assinante.js");
const Podcast = require('./Podcast');
const Musica = require('./Musica');


class PlataformaDigital {
    constructor(nome) {
        this.nome = nome;
        this.usuarios = [];
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

    leArquivoUsuarios(caminhoArquivoUsuario) {
        // Cria string ao ler arquivo CSV local
        var usuariosCSV = fs.readFileSync(caminhoArquivoUsuario, 'utf8');

        // Separa string do csv em quebras de linha
        usuariosCSV = usuariosCSV.split("\n");

        // Remove primeiro (header do csv) e último elemento (\n)
        usuariosCSV.shift();
        usuariosCSV.pop();

        // usuariosCSV agora possui apenas os usuários a serem cadastrados
        var usuarios = [];
        for (usuario in usuariosCSV) {
            var separaLinha = usuariosCSV[usuario].split(';');
            var id = separaLinha[0]
            var tipo = separaLinha[1];
            var nome = separaLinha[2];

            var usuario;
            switch(tipo) {
                case "A":
                    usuario = new Artista(nome, id);
                case "P":
                    usuario = new Podcaster(nome, id);
                case "U":
                    usuario = new Assinante(nome, id);
            }

            this.usuarios.push(usuario);
        }
    }

    imprimeUsuarios() {
        var i = 0;
        for (i in this.usuarios) {
            console.log(`${this.usuarios[i].getCodigo()};${this.usuarios[i].getNome()}`)
        }
    }

    leArquivoFavoritos(caminhoArquivoFavorito) {
        // TODO? - encontrar e ignorar favoritos repetidos, inserir favoritos

        // Cria string ao ler arquivo CSV local
        var favoritosCSV = fs.readFileSync(caminhoArquivoFavorito, 'utf8');

        // Separa string do csv em quebras de linha
        favoritosCSV = favoritosCSV.split("\n");

        // Remove primeiro (header do csv) e último elemento (\n)
        favoritosCSV.shift();
        favoritosCSV.pop();

        // favoritosCSV agora possui apenas os gêneros a serem cadastrados
        var codigosFavoritos = [];
        var midiasFavoritadas = [];
        for (favorito in favoritosCSV) {
            var separaLinha = favoritosCSV[favorito].split(";");
            codigosFavoritos.push(separaLinha[0]);
            midiasFavoritadas.push(separaLinha[1].split(","));
            for (midiaFavoritada in midiasFavoritadas) {
                // oi;
            }
        }
        console.log(codigosFavoritos);
        console.log(midiasFavoritadas);
    }

    leArquivoMidias(caminhoArquivoMidia){
         // Cria string ao ler arquivo CSV local
         var midiasCSV = fs.readFileSync(caminhoArquivoMidia, 'utf8');

         // Separa string do csv em quebras de linha
         midiasCSV = midiasCSV.split("\n");
 
         // Remove primeiro (header do csv) e último elemento (\n)
         midiasCSV.shift();
         midiasCSV.pop();
 
         // midiasCSV agora possui apenas os usuários a serem cadastrados
         for (let index in midiasCSV){
            let separaLinha = midiasCSV[index].split(';');
            let id = separaLinha[0].trim();
            let nome = separaLinha[1].trim();
            let tipo = separaLinha[2].trim();
            let produtores = (separaLinha[3].trim()).split(',');
            let duracao = separaLinha[4].trim();
            duracao = duracao.replace(',', '.');
            let genero = separaLinha[5].trim();
            if (genero.length !== 2){
                genero = (genero.split(','))[0];
            }
            let temporada = separaLinha[6].trim();
            let album = separaLinha[7].trim();
            let albumId = separaLinha[8].trim();
            let ano = separaLinha[9].trim();
            
            var produto;
            switch (tipo){
                case 'P':
                    produto = new Podcast(
                        id,
                        nome,
                        genero,
                        temporada,
                        duracao,
                        ano
                    );
                    break;
                case 'M':
                    produto = new Musica(
                        nome,
                        id,
                        genero,
                        duracao,
                        ano);
                    break;
            }
            produto.setProdutor(produtores);
            this.produtosCadastrados.push(produto);
         }
         console.log(this.produtosCadastrados);
    }
}

module.exports = PlataformaDigital;
