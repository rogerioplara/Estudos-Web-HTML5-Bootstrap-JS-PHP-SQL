// EXEMPLOS DE SELETORES E RESPECTIVOS RESULTADOS

let el = null

//seletores mais básicos

//universal selector - *

//busca o primeiro elemento do documento
el = document.querySelector('*')

//buscar todos os elementos do documento
el = document.querySelectorAll('*')

//type seletor - p/div/h1

//busca o primeiro parágrafo de um documento
el = document.querySelector('p')

//buscar todos os parágrafos de um documento
el = document.querySelectorAll('p')

//class selector - .texto

//buscar o primeiro elemento que contém a classe "texto" no atributo class
el.document.querySelector('.texto')

//buscar todos os elementos que contém a classe "texto" no atributo class
el.document.querySelectorAll('.texto')

//id selector - #

//buscar o elemento que tem o id indicado
el = document.querySelector('#texto')

//uma vez que o id é único, não faz sentido usar o querySelectorAll()

//atributo seletor - [atributo]

//todos os elementos que contém o atributo NAME
el = document.querySelectorAll('[name]')

//todos os elementos parágrafo que contem o atributo NAME
el = document.querySelectorAll('p[name]')

//todos os elementos que contém o atributo NAME e cujo value seja TEXTO
el = document.querySelectorAll('[name="texto"]')

//todos os elementos que contém o atributo class e cujo value tem várias palavras separadas por espaços e uma delas é "letra"
el = document.querySelectorAll('[class~="letra"]') // class="texto letra cor"

//todos os elementos cujo atributo class tem um value que começa por uma determinada palavra
el = document.querySelectorAll('[class^="color"]')

//todos os elementos cujo atributo class tem um value que termina com a expressão "size"
el = document.querySelectorAll('[class$="size"]')

//todos elementos cujo atributo class tem a palavra TEXT pelo menos uma vez
el = document.querySelectorAll('[class*="text"]') //class="texto"

//podemos agrupar seletores - vai buscar todos os divs, p e h1
el = document.querySelectorAll('div, p, h1')

//ou buscar os descendentes
el = document.querySelectorAll('div ul li')

//ou buscar descendentes diretos
el = document.querySelectorAll('div > h3')

// todos os seletores de CSS são válidos no querySelector() e no querySelectorAll()

