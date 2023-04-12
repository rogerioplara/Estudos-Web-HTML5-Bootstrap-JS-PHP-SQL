let frase1 = "Esta frase serve para testes"
console.log(frase1.length) // retorna quantos caracteres tem a string incluindo espaços

let frase2 = "Esta frase não serve apenas para teste"
console.log(frase2.indexOf("apenas")) // retorna a posição que contém a string. Caso não tenha, retorna -1

let frase3 = "Esta frase está dividida em duas."
let frase4 = "Esta é a segunda parte"
let frase_final = frase3 + " " + frase4
console.log(frase_final)
