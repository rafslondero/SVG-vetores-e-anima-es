import { Cards } from './Cards.js'
import { Icones } from './Icones.js'
import { Footer } from './Footer.js'


window.onload = () => { //window.onload/carregamento da página

    const animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));

    const icones = new Icones();
    icones.animaIcones()

    const footer = new Footer();
    footer.efeitoOnda();
}