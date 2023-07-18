/*
OBJETIVO:
O mesmo do exercício anterior mas com unificação da instrução para os 3 elementos, sem propagação
*/

//seleciona todos os elementos e os coloca em uma coleção/array
let elementos = document.querySelectorAll("section, article, div")

//percorre o array de elementos, adicionando a função do clique para cada um
elementos.forEach((event) => {
    event.addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(e.target.tagName)
    })
})