//Desativar a função nativa de um link
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault()
})

//desativar a subissão do formulário
document.querySelector('input[type="submit"]').addEventListener('click', (event)=>{
    
    //validação do formulário

    console.log(event)
    event.stopPropagation()
    event.preventDefault()
    
})

//cuidado com a propagação!

document.querySelector('.caixa').addEventListener('click', ()=>{
    console.log('DIV')
})