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

// funcao() // não vai funcionar
let funcao = function () {
    console.log("Texto da função")
}
funcao();