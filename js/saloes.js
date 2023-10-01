// const horarios = [
//     {
//         'seg' : [7, 8, 9, 10, 11, 13, 14, 15, 16, 17]
//     },

//     {
//         'ter' : [7, 8, 9, 10, 11, 13, 14, 15, 16, 17]
//     },

//     {
//         'qua' : [7, 8, 9, 10, 11, 13, 14, 15, 16, 17]
//     },

//     {
//         'qui' : [7, 8, 9, 10, 11, 13, 14, 15, 16, 17]
//     },

//     {
//         'sex' : [7, 8, 9, 10, 11, 13, 14, 15, 16, 17]
//     },
// ]


var params = new URLSearchParams(window.location.search);
var nome = params.get("nome");
var imagem = params.get("imagem");
console.log(nome, imagem); // Isso vai mostrar "MeuValor" no console.

const salao = document.querySelector(".salao")

salao.innerHTML = `
<h1>${nome}</h1>
<div class="container-imagens">
    <img src="${imagem}" alt="" class="imagem-principal">
    <div class="galeria">
        <img src="../Imagens/corte-homem.jpg" alt="" class="imagens-secundarias">
        <img src="../Imagens/corte-homem3.jpg" alt="" class="imagens-secundarias">
        <img src="../Imagens/corte-homem4.jpg" alt="" class="imagens-secundarias">
        <img src="../Imagens/corte-homem5.jpg" alt="" class="imagens-secundarias">
        <img src="../Imagens/corte-homem6.jpg" alt="" class="imagens-secundarias">
    </div>
</div>
`


const sectionHorarios = document.querySelector("#horarios")