// OBJETOS

//definir um objeto

let pessoa = {
    
    //propriedades
    nome: "Rogerio",
    sobrenome: "Lara",
    idade: 30,
    genero: "masculino",
    hobbies: [
        'Programação',
        'Jogos',
        'Cinema'
    ],

    //métodos
    apresentar_nome: function(){
        return this.nome + " " + this.sobrenome
    },

    apresentar_idade: function(){
        return this.idade + " anos de idade"
    },

}

// apresentar dados de um objeto

console.log(pessoa.nome)
console.log(pessoa['genero'])
console.log(pessoa.apresentar_nome())
console.log(pessoa.apresentar_idade())
console.table(pessoa.hobbies)

// apresentar todas as propriedades do objeto

for(let propriedade in pessoa){
    console.log(pessoa[propriedade])
}

// adicionar propriedades ao objeto

pessoa.email = "rogerioo.lara@gmail.com"
pessoa['mobile'] = "123456789"
console.log(pessoa.email)
console.log(pessoa.mobile)
console.log(pessoa)

//eliminar propriedades de um objeto

delete pessoa.idade
console.log(pessoa.idade) // retorna undefined

// valor vs referência
// os objetos são tratados como referência na memória. Quando copiamos um objeto a partir de outro, não estamos criando um novo objeto, apenas uma referência

// duas referências para o mesmo objeto em memória

let transporte = {
    tipo: "automóvel",
    ano: 2032,
    marca: "audi"
}

let novo_transporte = transporte
novo_transporte.marca = "mercedes"

console.table(transporte)
console.table(novo_transporte)

// forma de criar objeto a partir de outro:
// copia todas as informações do objeto para o novo
let transporte_final = Object.assign({}, transporte)
transporte_final.marca = "nissan"
console.table(transporte)
console.table(transporte_final)

//outra forma: spread operator
let transporte2 = {...transporte}
transporte2.marca = "tesla"
console.table(transporte)   
console.table(transporte_final)
console.table(transporte2)