// ARRAYS - coleção de todo tipo de objetos, strings, números, datatypes, etc

let nomes = ["joao", "ana", "carlos"]

// extrair partes de um array - retorna um novo array
console.table(nomes)
let nomes_extraidos = nomes.slice(0, 2)
console.table(nomes_extraidos)

// juntar dois arrays - concatena no fim
console.table(nomes)
let outros_nomes = ["joaquim", "carla", "manuel"]
nomes = nomes.concat(outros_nomes)
console.table(nomes)

// procurar item num array - retorna boolean
console.log(nomes.includes("carlos"))

// procurar posicao de item num array - retorna posição do valor - se falso retorna -1
console.log(nomes.indexOf("joana"))

// converter um array numa string
let todos_os_nomes = nomes.join(" <> ") //separador
console.log(todos_os_nomes)