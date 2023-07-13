
//console.log(document.getElementById('noticia').id)

let e = document.getElementById('titulo')
console.log(e)

console.log(e.id)
console.log(e.classList)
console.log(e.className)
console.log(e.innerHTML) // busca o conteúdo e o html
console.log(e.innerText) // busca somente o texto
console.log(e.textContent) // busca somente o texto

/*
document.getElementsByClassName()
document.getElementsByName()
document.getElementsByTagName()

retorna sempre arrays
*/

let a = document.getElementsByClassName("texto-titulo")
console.log(a[0])

let b = document.getElementsByClassName("outra-noticia")
console.log(b)

b[1].innerText = "Nova notícia"

let c = document.getElementsByName("text_usuario")
console.log(c[0].value)

//altera o valor o value definido no html
c[0].value = "Rogerio"

let d = document.getElementsByTagName("div")
console.log(d)