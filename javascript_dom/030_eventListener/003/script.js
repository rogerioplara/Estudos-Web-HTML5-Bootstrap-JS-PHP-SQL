//DEFINIR UM EVENT LISTENER

// uma das formas

// function evento (){
//     document.querySelector("h1").textContent = "Novo Texto"
// }

// let botao = document.querySelector("button")
// botao.addEventListener('click', evento)

// mais atual

// let botao = document.querySelector("button")
// botao.addEventListener('click', function(){
//     console.log('clique')
// })

// com arrow function
// let botao = document.querySelector("button")
// botao.addEventListener('click', () => console.log('clique'))

// unindo as coisas

// o elemento E como argumento da função assume a identidade do botão, podendo assim utiliza-lo como alvo de manipulação
document.querySelector("button").addEventListener('click', (e) => {
    console.log('clique')
    e.target.textContent = "Alterado"
    document.querySelector("h1").textContent = "Texto Alterado"
})

