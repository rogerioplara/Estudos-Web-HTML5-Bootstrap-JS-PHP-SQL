/* 
Operador Ternário

var resultado = (condição) ? valor1 : valor2
Atribui à variável resultado, caso a condição for verdadeira o valor1, caso falso, o valor2
*/

let enviar_email = true
let frase = enviar_email ? "Enviar" : "Não enviar";
console.log(frase);

let valor = 1;
let frase1 = valor < 5 ? "SIM" : "NAO";
console.log(frase1);

let valor1 = 100;
valor1 == 10 ? console.log("SIM") : console.log("NAO");

/*
Operador ternário não tem essa função de executar bloco de código

let valor2 = 10
valor2 == 10 ? {
    console.log("Sim 1")
    console.log("Sim 2")
} : {
    console.log("Não 2")
    console.log("Não 2")
}
*/

let valor3 = 50
let valor4 = 10
let resposta = valor3 == 5 && valor4 == 10 ? 'OK' : 'NOT OK'
console.log(resposta)