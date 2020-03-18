// Módulo File System para leitura de arquivos
const fs = require('fs');

function leArquivoFavoritos(caminhoArquivoFavorito) {
    // TODO - encontrar e ignorar favoritos repetidos, inserir favoritos

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

const caminhoArquivoFavorito = "entradas/favoritos.csv";
leArquivoFavoritos(caminhoArquivoFavorito);

/* Em C++:
void PlataformaDigital::carregaArquivoFavoritos(ifstream &infile)
{
    string primeiraLinha;
    int cod = 0;
    int favoritoAtual = 0;
    list<int> favoritos;
    getline(infile, primeiraLinha); // Ignorando primeira linha
    string linhaAtual;

    while (!infile.eof())
    {
        getline(infile, linhaAtual);
        stringstream linhaAtualStream(linhaAtual);
        if (linhaAtual.empty())
        {
            break;
        }

        linhaAtualStream.ignore(1, ';');

        if (linhaAtualStream.peek() == -1)
        {
            continue;
        }

        bool favoritoRepetido = false;
        favoritos.push_back(favoritoAtual);

        while (linhaAtualStream.peek() == ',')
        {
            linhaAtualStream.ignore(1, ',');

            for (int favorito : favoritos)
            {
                if (favoritoAtual == favorito)
                {
                    favoritoRepetido = true;
                    break;
                }
            }
            if (!favoritoRepetido)
            {
                favoritos.push_back(favoritoAtual);
            }
            favoritoRepetido = false;
        }

        Assinante *assinanteAtual = NULL;
        for (Assinante *itAssinante : this->assinantes)
        {
            if (itAssinante->getCodigo() == cod)
            {
                assinanteAtual = itAssinante;
                break;
            }
        }

        int achouFavorito = 0;
        for (int itFavs : favoritos)
        {
            for (Midia *itFavsM : this->produtosCadastrados)
            {
                if (itFavs == itFavsM->getCodigo())
                {
                    itFavsM->getGenero()->favoritadoPorUser(itFavsM->getDuracao());
                    assinanteAtual->insereFavoritos(itFavsM);
                    achouFavorito = 1;
                }
            }
        }
    }
}
*/
