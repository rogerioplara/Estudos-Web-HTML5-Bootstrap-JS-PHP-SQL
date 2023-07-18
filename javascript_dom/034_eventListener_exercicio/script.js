/*
OBJETIVO:
Apresentar 25 caixas em stack vertical com gradação de cores vermelho, verde ou azul, com variação do valor RGB em 10 pontos
*/

//para cada botão, adiciona um evento que cria uma div e adiciona um elemento caixa em cada div. Esse elemento já está definido no style.css
//consequentemente, adiciona um incremento ao rbg do elemento, fazendo com que sejam geradas todas as cores escolhidas em 10 em 10
document.querySelector('#btn_vermelho').addEventListener('click', () => {
    delete_elements()
    for(let i = 0; i <= 250; i += 10){
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(${i},0,0)`
        document.body.appendChild(tmp)
    }
})

document.querySelector('#btn_verde').addEventListener('click', () => {
    delete_elements()
    for(let i = 0; i <= 250; i += 10){
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(0,${i},0)`
        document.body.appendChild(tmp)
    }
})

document.querySelector('#btn_azul').addEventListener('click', () => {
    delete_elements()
    for(let i = 0; i <= 250; i += 10){
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(0,0,${i})`
        document.body.appendChild(tmp)
    }
})

//função para remover o elemento anterior ao clicar no botão, do contrário seriam adicionados no fim de cada div
function delete_elements(){
    let elementos = document.querySelectorAll('.caixa')
    elementos.forEach(e => e.remove())
}