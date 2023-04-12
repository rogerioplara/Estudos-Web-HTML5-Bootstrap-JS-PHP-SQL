let valor = 1;
switch (valor) {
    case 1:
        console.log('Valor = 1')
        break
    case 2:
        console.log('Valor = 2')
        break
    default:
        console.log('Default')
        break
}

let avaliacao = 50
switch (avaliacao) {
    case 1:
        console.log('Resultado Ruim')
        break;
    case 2:
        console.log('Resultado Negativo')
        break;
    case 3:
        console.log('Resultado Positivo')
        break;
    case 4:
        console.log('Resultado Bom')
        break;
    case 5:
        console.log('Resultado Excelente')
        break;
    default:
        console.log('Avaliação Inválida')
        break;
}

let valor1 = 100
switch (true) {
    case (valor1 < 10):
        console.log('Valor inferior a 10')
        break;
    case (valor1 > 10):
        console.log('Valor maior que 10')
        break;
    default:
        console.log('Valor igual a 10')
        break;
}

let nome = 'joao'
switch (nome) {
    case 'joao':
    case 'joaquim':
    case 'joana':
    case 'josé':
        console.log('O nome começa com a letra J')
        break;
    case 'fernando':
        console.log('O nome começa com a letra F')
    default:
        console.log('Não foi possível identificar a letra inicial')
        break;
}