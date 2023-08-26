const saloes = [
    {
        imagem: "/Imagens/corte-homem.jpg",
        nome: "studio sublime",
        nota: "5",
        categoria: "cortes"
    },
    {
        imagem: "/Imagens/corte-homem.jpg",
        nome: "studio sublime",
        nota: "5",
        categoria: "cortes"
    },
    {
        imagem: "/Imagens/corte-homem3.jpg",
        nome: "studio sublime",
        nota: "5",
        categoria: "cortes"
    },
    {
        imagem: "/Imagens/corte-homem.jpg",
        nome: "studio sublime",
        nota: "5",
        categoria: "cortes"
    }

]

const section = document.querySelector(".saloes")

saloes.forEach((text, indice) => {
    const div = document.createElement('div')
    div.className = 'card-saloes'
    div.innerHTML = `
    <img src="${text.imagem}" alt="imagens do salão" class="imagens-saloes">
    <div class="card-conteudo">
        <h3>${text.nome}</h3>
        <p>${text.nota}</p>
        <img src="/Imagens/Star.svg" alt="estrelas" class="imagens-estrelas">
    </div>
    <h5>${text.categoria}</h5>
    `
    section.appendChild(div)
})
