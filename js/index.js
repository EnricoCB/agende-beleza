import {saloes} from '../js/api.js';


const section = document.querySelector(".saloes")


saloes.forEach((text, i) => {
    const div = document.createElement('div')
    div.className = 'card-saloes'
    div.innerHTML = `
    <a  href="/html/saloes.html" class="link-imagens" id="link-imagens${i}">
        <img src="${text.imagem}" alt="imagens do salão" class="imagens-saloes">
        <div class="card-conteudo">
            <div class="text-card-conteudo">
                <h3>${text.nome}</h3>
                <div class="text-avaliacao">
                    <p>${text.nota}</p>
                    <img src="/Imagens/Star.svg" alt="estrelas" class="imagens-estrelas">
                </div>
            </div>

            <div class="text-card-categoria">
            <p>${text.categoria1}</p>
            <p>${text.categoria2}</p>
        </div>
        </div>
    </a>
    `
    section.appendChild(div)
})

let salaoSelecionado

function setSalaoSelecionado(salao) {
    salaoSelecionado = salao;
}
  
function getSalaoSelecionado() {
    return salaoSelecionado;
}


const a = document.querySelectorAll(".link-imagens")
a.forEach((element) =>{
    element.addEventListener("click", () =>{
        let num = element.id.match(/\d+/)[0]
        const salao = saloes[Number(num)]
        setSalaoSelecionado(salao)
    })

})

let salao = getSalaoSelecionado()

export default salao