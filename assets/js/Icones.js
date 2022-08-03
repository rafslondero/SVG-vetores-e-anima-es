class Icones {
    constructor() {
        this.listaIcones = document.querySelectorAll('.icone')
    }

    animaIcones() {
        TweenMax.to(this.listaIcones, 1, {scale: 0.9, repeat: -1, yoyo: true })
        //fazendo os icones com o scale darem um zoom para frente e trás 
        //ele diminui até 0.9 e vai até -1 o yoyo é um infinito ele não deixa a animação parar
    }
}

export { Icones }