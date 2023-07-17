//buscar o botão
let botao = document.querySelector('button')

//podemos adicionar multiplos listeners ao mesmo elemento

//addEventListener leva 2 argumentos 
//arg1 = que tipo de evento 
botao.addEventListener('click', function(){
    document.querySelector('h1').textContent = "Texto alterado 1"
})

botao.addEventListener('click', function(){
    console.log('clique')
})