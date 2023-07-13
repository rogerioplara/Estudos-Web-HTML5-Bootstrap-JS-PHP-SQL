// APLICAR ESTILOS INLINE COM JAVASCRIPT

let el = document.querySelector("h1")
el.style.backgroundColor = "yellow"

let el2 = document.querySelector("p")
console.log(el2.style.backgroundColor)

let el3 = document.querySelector("p")
const estilos = window.getComputedStyle(el3)
console.log(estilos.getPropertyValue('color'))
console.log(estilos.getPropertyValue('font-size'))