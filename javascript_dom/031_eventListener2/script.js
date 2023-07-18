/*
OBJETIVO:
Ao clicar no botão, alterar a cor de fundo da caixa para aquamarine e apresentar o texto 'clique' no console, removendo o evento click do botão
*/

//define os elementos em variáveis para pode manipular
let caixa = document.querySelector('.caixa')
let botao = document.querySelector('button')

//altera o fundo, escreve no console e remove a função do botão
function executar(event){
    caixa.classList.add('cor-fundo-caixa')
    console.log('clique')
    botao.removeEventListener('click', executar)
}

//define um event listener ao clicar, executando a função
botao.addEventListener('click', executar)