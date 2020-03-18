// Módulo File System para leitura de arquivos
const fs = require('fs');

function leArquivoGeneros(caminhoArquivoGenero) {
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
    for (genero in generosCSV) {
        var separaLinha = generosCSV[genero].split(";");
        siglasGeneros.push(separaLinha[0]);
        nomesGeneros.push(separaLinha[1]);
    }
    console.log(siglasGeneros);
    console.log(nomesGeneros);
}

const caminhoArquivoGenero = "entradas/generos.csv";
leArquivoGeneros(caminhoArquivoGenero);

// Leitura de csv async
// fs.readFile(filename, 'utf-8', (err, data) => {
//     if (err) throw err;

//     text = data.toString();
// });
