import {horarios} from "../js/api.js"

let objetoCodificado = sessionStorage.getItem('objetoCodificado');

let salaoInfo = JSON.parse(objetoCodificado);

const salao = document.querySelector(".salao")

salao.innerHTML = `
<h1>${salaoInfo.nome}</h1>
<div class="container-imagens">
  <div class="container-imagem-principal">
    <img src="../Imagens/arrow-left.svg" alt="" class="arrow" id="arrow-left">
    <img src="${salaoInfo.imagem1}" alt="" class="imagem-principal">
    <img src="../Imagens/arrow-right.svg" alt="" class="arrow" id="arrow-right">
  </div>
  <div class="galeria">
    <img src="${salaoInfo.imagem1}" alt="" class="imagens-secundarias">
    <img src="${salaoInfo.imagem2}" alt="" class="imagens-secundarias">
    <img src="${salaoInfo.imagem3}" alt="" class="imagens-secundarias">
    <img src="${salaoInfo.imagem4}" alt="" class="imagens-secundarias">
    <img src="${salaoInfo.imagem5}" alt="" class="imagens-secundarias">
  </div>
</div>
`

const mapa = document.querySelector(".mapa-conteudo")
mapa.innerHTML = `<iframe src="${salaoInfo.mapa}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="mapa"></iframe>`





let botoesHorario = document.querySelectorAll('.botao-horarios');
var ultimoBotaoSelecionado = null; 
botoesHorario.forEach(function(botao) {
  botao.addEventListener('click', function() {
    if (ultimoBotaoSelecionado) {
      ultimoBotaoSelecionado.classList.remove('selecionado');
    }
    botao.classList.add('selecionado');
    
    ultimoBotaoSelecionado = botao;
  });
});

var formulario = document.querySelector('.form-botoes');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); 
  var horarioSelecionado = null;
  if (ultimoBotaoSelecionado) {
    horarioSelecionado = ultimoBotaoSelecionado.textContent;
  }

  console.log('Horário selecionado:', horarioSelecionado);
});

const sectionHorarios = document.querySelector("#horarios")

const imgPrincipal = document.querySelector(".imagem-principal")
const imgSecundaria = document.querySelectorAll(".imagens-secundarias")
const botaoProximo = document.querySelector("#arrow-right")
const botaoAnterior = document.querySelector("#arrow-left")

let indiceAtual = 0;

function imagemAtual(){
  imgPrincipal.src =  imgSecundaria[indiceAtual].src;
}

botaoAnterior.addEventListener("click", () => {
  indiceAtual--;
  if (indiceAtual < 0) {
      indiceAtual = imgSecundaria.length - 1;
  }
  imagemAtual();
});

// Evento para o botão "Próximo"
botaoProximo.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual >= imgSecundaria.length) {
      indiceAtual = 0;
  }
  imagemAtual();
});

// Exibir a primeira imagem ao carregar a página
imagemAtual();