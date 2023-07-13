// ESCOPO DE VARIÁVEIS

//exemplo 1

let valor = 10
console.log(valor)

//exemplo 2

let valor1 = 10
function escrever(){
    console.log("função: " + valor1)
}
escrever()
console.log(valor1)

//exemplo 3

let valor2 = 10 //escopo global
function escrever1(){
    let valor2 = 100 // escopo local
    console.log("função: " + valor2)
}
escrever()
console.log(valor2) // o escopo da função não é acessível de fora dela

//exemplo 4
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//console.log(i) -> tentando acessar o escopo local de um escopo externo -> gera erro