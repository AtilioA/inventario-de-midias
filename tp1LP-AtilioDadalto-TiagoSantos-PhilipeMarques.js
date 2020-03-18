const PlataformaDigital = require("./src/PlataformaDigital.js");

console.log("Hello, Triple Acento!");

var argumentos = process.argv.slice(2);
if (argumentos.length != 8) {
    console.log("Número incorreto de argumentos. Encerrando execução.")
    process.exit(-1);
}
console.log(`Argumentos: [${argumentos}]`);

var gen = "";
var user = "";
var midia = "";
var favs = "";

for (var i = 0; argumentos[i]; i++) {
    if (argumentos[i][0] == '-') {
        switch (argumentos[i][1]) // Switch para identificar argumentos passados pelo terminal
        {
            case 'g':
                gen = argumentos[i + 1];
                console.log(`--GÊNEROS--   ${gen}`);
                i++;
                break;
            case 'u':
                user = argumentos[i + 1];
                console.log(`--USUÁRIOS--  ${user}`);
                i++;
                break;
            case 'm':
                midia = argumentos[i + 1];
                console.log(`--MÍDIAS--    ${midia}`);
                i++;
                break;
            case 'f':
                favs = argumentos[i + 1];
                console.log(`--FAVORITOS-- ${favs}`);
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
spotifyzada.leArquivoGeneros(gen);
console.log("Gêneros OK!\n");
spotifyzada.imprimeGeneros();

console.log("Carregando usuários...\n");
// // spotifyzada.carregaArquivoUsuarios(fileUser);
// console.log("Usuários OK!\n");
// spotifyzada.imprimeUsuarios();

// console.log("\nProdutores:\n");
// spotifyzada.imprimeProdutores();
console.log("Carregando mídias...\n");
// // spotifyzada.carregaArquivoMidias(fileMidia);
// console.log("Mídias OK!\n");

console.log("Carregando favoritos...\n");
// // spotifyzada.carregaArquivoFavoritos(fileFavs);
// console.log("Favoritos OK!\n");

// console.log("\nQuantidade de mídias: " Midia::qtdProdutos "\n");
// console.log("Tempo total: " // spotifyzada.tempoConsumido() " minutos.\n");

// console.log("Relatório de estatísticas OK!\n");

console.log("Gerando relatório de backup...\n");
// // spotifyzada.geraRelatorioBackup();
// console.log("Relatório de backup OK!\n");

console.log("Gerando relatório de favoritos...\n");
// // spotifyzada.geraRelatorioFavoritos();
// console.log("Relatório de favoritos OK!\n");
