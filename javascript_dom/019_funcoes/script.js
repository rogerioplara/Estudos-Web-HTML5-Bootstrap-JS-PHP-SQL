// FUNCTIONS

// grupo de declarações que desempenham tarefas específicas, podem ser separads do fluxo principal do programa;

/*
function nome_da_funcao(){
    código executado dentro da função
}
*/

function escrever() {
    console.log('Aqui está a frase da função.')
}

escrever();

//exemplo 2 -> parâmetros

function escrever2(mensagem) {
    console.log(mensagem);
}

escrever2("Olá Mundo!");
escrever2("As funções são fáceis de criar");

//exemplo 3 -> parâmetros e retorno

function adicionar(a, b) {
    return a + b
}

let resultado = adicionar(100, 200);
console.log("Resultado: " + resultado);

//exemplo 4 -> parâmetros com valor padrão (default values)

function saudacao(mensagem = "Bom dia") {
    console.log(mensagem);
}

//assume o valor que foi atribuído, valor padrão
saudacao();
//substitui o valor padrão
saudacao("Boa noite");