/*
document.querySelector()
Retorna apenas 1 elemento mesmo que tenha mais de 1

document.querySelectorAll()
Retorna todos os elementos correspondentes

aceitam como argumento ou parâmetro o mesmo seletor do css
*/

let a = document.querySelector("#titulo")
console.log(a)

let b = document.querySelector(".cor-texto-noticia")
console.log(b)

let c = document.querySelectorAll("p")
console.log(c)