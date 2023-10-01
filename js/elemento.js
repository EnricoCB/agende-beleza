import {saloes} from '../js/api.js'

const a = document.querySelectorAll(".link-imagens")
 a.forEach((element) =>{
    element.addEventListener("click", () => {
        let num = element.id.match(/\d+/)[0]
        let salao = saloes[Number(num)]
        window.location.href = "saloes.html?nome=" + salao.nome + "&imagem=" + salao.imagem + "";
    })

})

