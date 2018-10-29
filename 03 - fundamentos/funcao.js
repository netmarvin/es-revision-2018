
// funcao sem retorno...
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2,3)     // 5

//nota: estranho...
//nota: soma um valor inteiro com undefined...
imprimirSoma(2)    // NaN

imprimirSoma(2, 10, 22, 50, 7, 8)   // 12

imprimirSoma()    // NaN


// funcao com retorno...
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,3))   // 5

console.log(soma(2))     // 3






