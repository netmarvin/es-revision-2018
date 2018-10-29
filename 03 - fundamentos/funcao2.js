
// armazenando uma funcao em uma constante...

const imprimirSoma = function(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)  // 5

// armazenando uma funcao arrow em uma constante...
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))   // 5


// retorno implicito...
const subtracao = (a,b) => a - b

console.log(subtracao(2,3))


