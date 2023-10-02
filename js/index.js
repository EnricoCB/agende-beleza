import {saloes} from '../js/api.js';
import { cria_cards } from './cria_cards.js';


const section = document.querySelector(".saloes")


saloes.forEach((salao, i) => {
    cria_cards(section, salao, i)
})


const categorias = document.querySelectorAll(".categorias div")

categorias.forEach((categoria) =>{
    categoria.addEventListener("click", () => {
        const categoriaTexto = categoria.querySelector('.titulo-categorias').textContent
        window.location.href = `categoria.html?categoria=${categoriaTexto}`;
    })
})



const cards = document.querySelectorAll(".link-imagens")
 cards.forEach((element) =>{
    element.addEventListener("click", () => {
        let num = element.id.match(/\d+/)[0]
        let salao = saloes[Number(num)]
        salao = JSON.stringify(salao);
        sessionStorage.setItem('objetoCodificado', salao);
        window.location.href = 'saloes.html';
    })

})

