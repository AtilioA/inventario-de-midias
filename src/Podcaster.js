"use strict"; // evitar más práticas
const Produtor = require("./Produtor.js");


class Podcaster extends Produtor {
    constructor(nome, codigo) {
        super(nome, codigo);
        this.podcasts = [];
    }

    getPodcasts() {
        return this.podcasts;
    }

    inserePodcast(podcast) {
        this.podcasts.push(podcast);
    }
}

module.exports = Podcaster;
