/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

// Minha solução

// for(let i = 1; i<= 5; i++) {
//     let btn = document.querySelector('#btn' + i).
//     addEventListener('click', (btn) => {
//         switch (i) {
//             case 1:
//                 document.querySelector('h3').style.color = '#2a9fd6'
//                 break;
//             case 2:
//                 document.querySelector('h3').style.color = '#93c'
//                 break;
//             case 3:
//                 document.querySelector('h3').style.color = '#77b300'
//                 break;
//             case 4:
//                 document.querySelector('h3').style.color = '#c00'
//                 break;
//             case 5:
//                 document.querySelector('h3').style.color = '#f80'
//                 break;
//             default:
//                 break;
//         }
//     })
// }


// Solução do professor sem bootstrap

// // array com as cores disponíveis
// const cores = ['#2a9fd6', '#93c', '#77b300', '#c00', '#f80'];

// //seleciona todos os botões e para cada botão adiciona a função
// document.querySelectorAll('[id^=btn]').forEach((btn) => {
//     console.log(btn)

//     //adiciona um event listener em cada botão, alterando a cor para cada botão disponível
//     btn.addEventListener('click', (btn) => {
//         let index = btn.target.id.substr(3, 4) - 1;
//         document.querySelector('h3').style.color = cores[index];
//     });
// });

// Solução do professor
const cores = ['primary', 'info', 'sucess', 'danger', 'warning']
document.querySelectorAll('[id^="btn"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        let index = btn.target.id.substring(3, 4) - 1;
        document.querySelector('h3').className = 'text-' + cores[index];
    })
})
