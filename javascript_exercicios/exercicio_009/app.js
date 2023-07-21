/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

// Minha Solução

// const range = document.querySelector('#range')
// range.setAttribute('min', 0)
// range.setAttribute('max', 100)
// range.value = 100

// let h3 = document.querySelector('h3')

// range.addEventListener('input', (event) => {
//     h3.style.opacity = 1 - event.target.value / 100
// })

// Solução do professor

const range = document.querySelector('#range')
const texto = document.querySelector('h3')
range.setAttribute('min', 0)
range.setAttribute('max', 100)
range.value = 0;
range.addEventListener('input', (el) => {
    texto.style.opacity = 1 - el.target.value / 100
})
