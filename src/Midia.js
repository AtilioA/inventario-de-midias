"use strict"; // evitar más práticas

class Genero {
    constructor(nome, sigla) {
        this.nome = nome;
        this.sigla = sigla;
        this.midias = [];
        this.qtdMidias = 0;
        this.favoritado = 0;
        this.escutado = 0;
    }

    // Getters
    getNome() {
        return this.nome;
    }
    getSigla() {
        return this.sigla;
    }
    getMidias() {
        return this.midias;
    }
    getQtdMidias() {
        return this.qtdMidias;
    }
    getFavoritado() {
        return this.favoritado;
    }
    getEscutado() {
        return this.escutado;
    }

    // Setters
    setNome(nome) {
        this.nome = nome;
    }
    setSigla(sigla) {
        this.sigla = sigla;
    }
    setMidias(midias) {
        this.midias = midias;
    }
    setQtdMidias(qtdMidias) {
        this.qtdMidias = qtdMidias;
    }
    setFavoritado(favoritado) {
        this.favoritado = favoritado;
    }
    setEscutado(escutado) {
        this.escutado = escutado;
    }

    adicionaMidia(midia) {
        this.qtdMidias++;
        this.midias.push(midia);
    }

    tempoGenero() {
        var sum = 0;
        var it;
        for (it of this.midias) {
            sum += it.getDuracao();
        }
        return sum;
    }

    favoritadoPorUser(duracao) {
        this.favoritado++;
        this.escutado += duracao;
    }
}

class Midia {
    static qtdProdutos = 0; // o eslint q se foda vai ficar assim e pronto

    constructor(tipo, nome, codigo, genero, duracao, ano, ti) {
        this.anoLancamento = ano;
        this.duracao = duracao;
        this.nome = nome;
        this.codigo = codigo;
        this.genero = genero;
        this.favoritado = 0;
        this.produtor = [];
        this.tipo = tipo;
        Midia.qtdProdutos++;
    }

    // Getters
    getAnoLancamento() {
        return this.anoLancamento;
    }
    getDuracao() {
        return this.duracao;
    }
    getNome() {
        return this.nome;
    }
    getCodigo() {
        return this.codigo;
    }
    getGenero() {
        return this.genero;
    }
    getFavoritado() {
        return this.favoritado;
    }
    getProdutor() {
        return this.produtor;
    }

    // Setters
    setAnoLancamento(anoLancamento) {
        this.anoLancamento = anoLancamento;
    }
    setDuracao(duracao) {
        this.duracao = duracao;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setFavoritado(favoritado) {
        this.favoritado = favoritado;
    }
    setProdutor(produtor) {
        this.produtor = produtor;
    }

    adicionaProdutor(produtor) {
        this.produtor.push(produtor);
    }

    adicionadoAosFavs() {
        this.favoritado++;
        var it
        for (it of this.produtor) {
            it.adicionadoAosFavoritos();
        }
    }

    getProdutorNome(produtores){
        var produtor = [];
        for (let i in this.produtor){
            for (let j in produtores){
                if (produtores[j].codigo === this.produtor[i].getCodigo()){
                    produtor.push(this.produtor[i].getNome());
                }
            }
        }
        return produtor;
    }
}

module.exports = Midia;
module.exports.Genero = Genero;
