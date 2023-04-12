/*
Operadores de Comparação
-------------------------------------
A == B      Se o valor A é igual ao valor B
A === B     Se o valor e tipo de A é igual a B
A != B      Se o valor de A não é igual a B
A !== B     Se o valor e tipo de A são diferentes de B
A < B       A menor que B
A > B       A maior que B
A <= B      A menor ou igual B
A >= B      A maior ou igual B
*/

let valor1 = 10
let valor2 = "10"

if (valor1 == valor2) { // Verdadeiro
    console.log("Os valores são iguais.")
}

if (valor1 === valor2) { // Falso
    console.log("Os valores são iguais e de mesmo tipo.")
}

/*
Operadores Lógicos
-------------------------------------
Condição A && Condição B    Verdadeiro se ambas forem verdadeiras
Condição A || Condição B    Verdadeiro se uma for verdadeira
!Condição A                 Verdadeiro se condição A for falsa
*/

let valor3 = 10;
if (valor3 > 5 && valor3 < 15) {
    console.log('O valor está entre 5 e 15.')
}

let valor4 = 20;
if (valor4 == 20 || valor4 < 100) {
    console.log('O valor é igual a 20 ou menor que 100.')
}

let enviar_email = false
if (!enviar_email) {
    console.log('Não enviar email.')
}
// Equivalente a:
if (enviar_email == false) {
    console.log('Não enviar email.')
}

if ((10 + 20 > 30) || (40 + 50 < 100)) {
    console.log('Pelo menos uma das condições é verdadeira.')
}