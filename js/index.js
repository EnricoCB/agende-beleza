export const saloes = [
    {
        imagem: "/Imagens/corte-homem.jpg",
        nome: "Barbearia Black",
        nota: "5",
        categoria1: "Cortes",
        categoria2: "Sobrancelha",
    },
    {
        imagem: "/Imagens/corte-homem4.jpg",
        nome: "Linicker",
        nota: "5",
        categoria1: "Cortes",
        categoria2: "Barba",
    },
    {
        imagem: "/Imagens/maquiagem3.jpg",
        nome: "Studio sublime",
        nota: "5",
        categoria1: "Maquiagem",
        categoria2: "Unhas",
    },
    {
        imagem: "/Imagens/salao.jpg",
        nome: "Salão Modas",
        nota: "5",
        categoria1: "Sobrancelha",
        categoria2: "Maquiagem",
    }

]


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

// const a = document.querySelectorAll(".link-imagens")
// a.forEach((element) =>{
//     element.addEventListener("click", () =>{
//         let num = element.id.match(/\d+/)[0]
//         const salao = saloes[Number(num)]
//         export default saloes
//     })

// })
