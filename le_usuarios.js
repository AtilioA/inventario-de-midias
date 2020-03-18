// Módulo File System para leitura de arquivos
const fs = require('fs');

function leArquivoUsuarios(caminhoArquivoUsuario) {
    // Cria string ao ler arquivo CSV local
    var usuariosCSV = fs.readFileSync(caminhoArquivoUsuario, 'utf8');

    // Separa string do csv em quebras de linha
    usuariosCSV = usuariosCSV.split("\n");

    // Remove primeiro (header do csv) e último elemento (\n)
    usuariosCSV.shift();
    usuariosCSV.pop();

    // usuariosCSV agora possui apenas os usuários a serem cadastrados
    var usuarios = [];
    for (usuario in usuariosCSV){
        var separalinha = usuariosCSV[usuario].split(';');
        usuarios.push({
            id: separalinha[0],
            tipo: separalinha[1],
            nome: separalinha[2]
        });
    }
    return usuarios;
    // console.log(usuarios);
}

const caminhoArquivoUsuario = 'entradas/usuarios.csv';
leArquivoUsuarios(caminhoArquivoUsuario);


module.exports = leArquivoUsuarios;