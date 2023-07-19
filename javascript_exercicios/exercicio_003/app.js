/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */

let valor = 0

let total = document.querySelector('#valor')

document.querySelector("#btn_incremento").addEventListener('click', () => {
    // // Minha solução
    // total.textContent = ++valor
    // if(total.textContent > 0) {
    //     total.style.color = "green";
    // } else if(total.textContent == 0) {
    //     total.style.color = "white";
    // }

    ++valor;
    setValor();
})

document.querySelector('#btn_decremento').addEventListener('click', () => {
    // // Minha solução
    // total.textContent = --valor
    // if(total.textContent < 0) {
    //     total.style.color = "red";
    // } else if(total.textContent == 0) {
    //     total.style.color = "white";
    // }

    --valor;
    setValor();
})

function setValor(){
    total.textContent = valor;

    // // legível e simples
    // if(valor === 0) total.style.color = "white"
    // else if(valor > 0) total.style.color = "green"
    // else total.style.color = "red"

    // operador ternário
    let color = valor == 0 ? 'white' : valor < 0 ? 'red' : 'green'
    total.style.color = color;

}