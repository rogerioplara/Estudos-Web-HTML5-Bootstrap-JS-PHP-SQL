/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezasseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */

// MINHA SOLUÇÃO

const imagens = ['x.png', 'o.png'];
let i = 0;
let filled_imgs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const boxes = document.querySelectorAll('[id^="img"]');

boxes.forEach(box => {
    box.addEventListener('click', box => {
        let index = box.target.id.substring(3);
        
        if (filled_imgs[index - 1] != 0) return

        box.target.setAttribute("src", imagens[i])
        filled_imgs[index - 1] = 1;
        i++;
        if (i >= imagens.length) {
            i = 0;
        }
    })
})

// SOLUÇÃO DO PROFESSOR
// let filled_imgs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// let symbol = 'x';
// document.querySelectorAll('[id^="img"]').forEach(img => {
//     img.addEventListener('click', img => {
//         let index = img.target.id.substring(3);
//         place_symbol(index);
//     })
// })

// function place_symbol(index){
//     // verifica se a imagem já foi anteriormente preenchida
//     if(filled_imgs[index - 1] != 0) return

//     document.querySelector('#img' + index).setAttribute('src', './' + symbol + '.png');
//     filled_imgs[index - 1] = 1;

//     if(symbol == 'x'){
//         symbol = 'o';
//     } else {
//         symbol = 'x';
//     }
// }