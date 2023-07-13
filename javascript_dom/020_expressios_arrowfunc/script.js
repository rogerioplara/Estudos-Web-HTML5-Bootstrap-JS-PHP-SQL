// Function expressions

function escrever1() {
    console.log("Olá Mundo")
}

let escrever2 = function () {
    console.log("Olá Mundo")
}

escrever1();
escrever2();

// -------------------------
// evocar corretamente a função
// -------------------------

// funcao() // não vai funcionar pois a chamada de uma function expression deve ser antes da definição da mesma
let funcao = function () {
    console.log("Texto da função")
}
funcao();

//---------------------------
//arrow function - introduzidas com o ES6 - sintaxe mais reduzida
//---------------------------

let funcao1 = function () {
    console.log("Funcao 1")
}

let funcao2 = () => {
    console.log("Funcao 2")
}

funcao1();
funcao2();

// arrow function com parametros

let funcao3 = (a,b) => {
    return a+b
}

console.log(funcao3(10,20))

//ou ainda mais simples

let adicao = (a,b) => a+b

console.log(adicao(100,200))


// é possível colocar o argumento no lugar dos parênteses desde que seja somente 1
let escrever = mensagem => console.log(mensagem)
escrever("Arrow function!")
escrever("Javascript é fantástico!")