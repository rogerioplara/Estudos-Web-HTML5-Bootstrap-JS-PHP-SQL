// este código vai ser executado antes dos elementos do body existirem:

// busca o status de carregamento da págima
// interactive e complete
// document.addEventListener('readystatechange', (event) => {
//     if(event.target.readyState === 'complete'){

//         document.querySelector('button').addEventListener('click', ()=>{
//             document.querySelector('h1').innerText = "Texto do título alterado"
//         })
//     }
// })

//funciona das duas formas

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', ()=>{
        document.querySelector('h1').innerText = "Texto do título alterado"
    })
})