// Variáveis

var nome = "Rogerio Peres Lara";
var idade = 29;
var administrador = false;

/*
podem ser escritas com var ou let;
constantes são escritas com const;
*/

var cidade;
cidade = "Lisboa";

console.log(nome, idade, administrador);
console.log(cidade);

var valor1 = 100, nome2 = "Ana", apelido = "Silva"

// let e const

let texto = "Frase de um texto";
const pi = 3.14;

texto = "nada";
// pi = 25; -> gera erro no console por se tratar de uma constante;

/*
Variáveis só podem começar com letra, underscore ou dollar
Nunca podem começar com número
Não pode conter espaços
Não pode ser uma palavra reservada do JS
Case sensitive
*/