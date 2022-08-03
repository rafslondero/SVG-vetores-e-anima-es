class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('section-dicas');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        if (posicao >= 25) {
            this.cardEsq.style.transform = `translate(${((-posicao) + 25) / 15}%)`; //200 posição na tela
            this.cardDir.style.transform = `translate(${(posicao -25) / 15}%)`; //o 15 é para deixar essa animação mais lenta
        }
    }
}

export { Cards }