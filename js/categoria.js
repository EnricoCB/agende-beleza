import {saloes} from '../js/api.js';
import { cria_cards } from './cria_cards.js';

const params = new URLSearchParams(window.location.search);

const categoria = params.get('categoria');

const section = document.querySelector(".saloes")

let contador = 0

saloes.forEach((salao, i) =>{
    if (categoria == salao.categoria1 || categoria == salao.categoria2){
        cria_cards(section, salao, i)
        contador++
    }
})

if (contador == 0){
    const titulo = document.querySelector(".titulo")
    titulo.innerText = `Nenhum salão dessa categoria encontrado`
}
