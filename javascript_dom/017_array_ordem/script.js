// ARRAYS - coleção de todo tipo de objetos, strings, números, datatypes, etc

let nomes = ["joao", "ana", "carlos", "xavier", "catarina", "francisco"]

// ordenar de forma ascendente - ALTERA o array original
nomes.sort()
console.table(nomes)

// ordenar de forma descendente
nomes.sort()
nomes.reverse()
console.table(nomes)

// sintaxe alternativa
nomes.sort().reverse()
console.table(nomes)

// ou ainda
console.table(nomes.sort().reverse())

// também funciona para arrays numéricos, mas o JS organiza-os como se fossem strings -> olha somente o primeiro algarismo
let valores = [1, 30, 20, 50, 56, 45]
valores.sort()
console.table(valores)
valores.reverse()
console.table(valores)

let valores2 = [1, 30, 20, 100, 50, 56, 45]
valores2.sort()
console.table(valores2)
valores2.reverse()
console.table(valores2)