/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */

// const range_1 = document.querySelector('#range_1')
// range_1.setAttribute('min', 0)
// range_1.setAttribute('max', 100)
// range_1.value = 0;
// range_1.addEventListener('input', (event) => {
//     document.querySelector('#value_1').textContent = event.target.value
// })

// const range_2 = document.querySelector('#range_2')
// range_2.setAttribute('min', 0)
// range_2.setAttribute('max', 100)
// range_2.value = 0;
// range_2.addEventListener('input', (event) => {
//     document.querySelector('#value_2').textContent = event.target.value
// })

// const range_3 = document.querySelector('#range_3')
// range_3.setAttribute('min', 0)
// range_3.setAttribute('max', 100)
// range_3.value = 0;
// range_3.addEventListener('input', (event) => {
//     document.querySelector('#value_3').textContent = event.target.value
// })

// SIMPLIFICANDO O CÓDIGO

for (let r = 1; r <= 3; r++) {
    let el = document.querySelector('#range_' + r);
    el.setAttribute('min', 0);
    el.setAttribute('max', 100);
    el.value = 0;
    el.addEventListener('input', (event) => {
        document.querySelector('#value_' + r).textContent = e.target.value
    });
}