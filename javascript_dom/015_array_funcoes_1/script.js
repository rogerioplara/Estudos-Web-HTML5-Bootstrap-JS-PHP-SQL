// ARRAYS - coleção de todo tipo de objetos, strings, números, datatypes, etc

let nomes = ["joao", "ana", "carlos"]

// alterar valores do array
nomes[1] = "maria"
console.table(nomes)

// quantos elementos tem um array
console.log(nomes.length)

// adicionar mais elementos no final do array
nomes.push("joaquim")
console.table(nomes)

// adicionar elementos no início do array
nomes.unshift("josé")
console.table(nomes)

// remover elemento do início
nomes.shift()
console.table(nomes)

// remover elemento do fim
let removido = nomes.pop()
console.log(removido)
console.table(nomes)

// remover e/ou adicionar elementos em qualquer posição
console.table(nomes)
nomes.splice(1, 2, "joaquim", "manuel", "rui")
console.table(nomes)

// ver eliminados
let eliminados = nomes.splice(1, 2, "joaquim", "manuel", "rui")
console.table(eliminados)