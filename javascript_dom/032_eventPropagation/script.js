/*
 OBJETIVO:
 Adicionar 3 eventos click, um para cada elemento dentro do body. Cada um vai apresentar um texto único no console e fazer com que sejam independentes (propagation)
*/

let section = document.querySelector("section")
let article = document.querySelector("article")
let div = document.querySelector("div")


//event.stopPropagation() serve para separar os eventos e não causar o bubbling, onde os elementos aninhados executam os eventos dos elementos pai
section.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('section')
})

article.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('article')
})

div.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('div')
})