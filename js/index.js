const saloes = [
    {
        imagem: "/Imagens/corte-homem.jpg",
        nome: "studio sublime",
        nota: "5",
    },
    {
        imagem: "/Imagens/corte-homem.jpg",
        nome: "studio sublime",
        nota: "5",
    },
    {
        imagem: "/Imagens/corte-homem3.jpg",
        nome: "studio sublime",
        nota: "5",
    },
    {
        imagem: "/Imagens/corte-homem.jpg",
        nome: "studio sublime",
        nota: "5",
    }

]

const section = document.querySelector(".saloes")

saloes.forEach((text) => {
    const div = document.createElement('div')
    div.className = 'card-saloes'
    div.innerHTML = `
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
        <p>Cortes</p>
        <p>Maquiagem</p>
    </div>
    </div>
    `
    section.appendChild(div)
})

