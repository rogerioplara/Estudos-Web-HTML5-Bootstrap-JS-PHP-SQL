// WHILE

// while (condição) {
//     código a ser executado
// }

let valor = 0
while (valor < 10) {
    console.log(valor)
    valor++
}

console.log("")
// DO-WHILE - executa primeiro e depois verifica a condição

let valor1 = 10
do {
    console.log(valor1)
    valor1++
} while (valor1 < 20)

console.log("")
// FOR

// for (iniciação; condição; incremento) {
//     código a executar
// }

for (let i = 20; i < 30; i++) {
    console.log(i)
}

console.log("")
// FOR IN -> mais funcional quando utilizado com objetos, nesse caso mostra o valor das chaves do array
let valores = [1, 2, 3, 4, 5]
for (valor in valores) {
    console.log(valor)
}

console.log("")
// FOR OF
let nomes = ["joao", "ana", "carlos"]
for (const nome of nomes) {
    console.log(nome)
}

console.log("")
// FOREACH utilizando arrow function ECS6
let names = ["joao", "ana", "carlos"]
nomes.forEach((n) => console.log(n))