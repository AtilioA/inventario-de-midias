const PlataformaDigital = require("./src/PlataformaDigital.js");

console.log("Hello, Triple Acento!");

var argumentos = process.argv.slice(2);
if (argumentos.length != 8) {
    console.log("Número incorreto de argumentos. Encerrando execução.");
    process.exit(-1);
}
console.log(`Argumentos: [${argumentos}]`);

var arquivoGeneros = "";
var arquivoUsuarios = "";
var arquivoMidias = "";
var arquivoFavoritos = "";

for (var i = 0; argumentos[i]; i++) {
    if (argumentos[i][0] == '-') {
        switch (argumentos[i][1]) // Switch para identificar argumentos passados pelo terminal
        {
            case 'g':
                arquivoGeneros = argumentos[i + 1];
                console.log(`--GÊNEROS--   ${arquivoGeneros}`);
                i++;
                break;
            case 'u':
                arquivoUsuarios = argumentos[i + 1];
                console.log(`--USUÁRIOS--  ${arquivoUsuarios}`);
                i++;
                break;
            case 'm':
                arquivoMidias = argumentos[i + 1];
                console.log(`--MÍDIAS--    ${arquivoMidias}`);
                i++;
                break;
            case 'f':
                arquivoFavoritos = argumentos[i + 1];
                console.log(`--FAVORITOS-- ${arquivoFavoritos}`);
                i++;
                break;
            default:
                console.log("OPÇÃO NÃO RECONHECIDA! Encerrando execução.\n");
                process.exit(-1);
                break;
        }
    }
}

var spotifyzada = new PlataformaDigital();
console.log("\nPlataforma digital criada.");


console.log("\nCarregando gêneros...");
spotifyzada.leArquivoGeneros(arquivoGeneros);
console.log("Gêneros OK!\n");
spotifyzada.imprimeGeneros();

console.log("\nCarregando usuários...");
spotifyzada.leArquivoUsuarios(arquivoUsuarios);
console.log("Usuários OK!\n");
spotifyzada.imprimeUsuarios();

// console.log("\nProdutores:\n");
// spotifyzada.imprimeProdutores();
console.log("\nCarregando mídias...\n");
spotifyzada.leArquivoMidias(arquivoMidias);
// console.log("Mídias OK!\n");

console.log("Carregando favoritos...\n");
// // spotifyzada.carregaArquivoFavoritos(fileFavs);
// console.log("Favoritos OK!\n");

// console.log("\nQuantidade de mídias: " Midia::qtdProdutos "\n");
// console.log("Tempo total: " // spotifyzada.tempoConsumido() " minutos.\n");

// console.log("Relatório de estatísticas OK!\n");

console.log("Gerando relatório de backup...\n");
spotifyzada.geraRelatorioBackup();
// console.log("Relatório de backup OK!\n");

//console.log("Gerando relatório de favoritos...\n");
// // spotifyzada.geraRelatorioFavoritos();
// console.log("Relatório de favoritos OK!\n");

console.log("Gerando Midias por Produtores");
spotifyzada.gerarMidiaPorProdutor();
console.log("Midias por Produtores OK!\n");