export function cria_cards (section, salao, i) {
    const div = document.createElement('div')
    div.className = 'card-saloes'
    div.innerHTML = `
    <a class="link-imagens" id="link-imagens${i}">
        <img src="${salao.imagem1}" alt="imagens do salão" class="imagens-saloes">
        <div class="card-conteudo">
            <div class="text-card-conteudo">
                <h3>${salao.nome}</h3>
                <div class="text-avaliacao">
                    <p>${salao.nota}</p>
                    <img src="../Imagens/Star.svg" alt="estrelas" class="imagens-estrelas">
                </div>
            </div>

            <div class="text-card-categoria">
            <p>${salao.categoria1}</p>
            <p>${salao.categoria2}</p>
        </div>
        </div>
    </a>
    `
    section.appendChild(div)
}