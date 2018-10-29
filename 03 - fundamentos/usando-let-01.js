
// nota: let tem escopo de bloco (escopo menor), e mais restrita...

var numero = 1

{
    let numero = 2
    console.log('dentro: ', numero)
}

console.log('fora: ', numero)


// nota: a execucao procura a variavel de escopo de bloco, se nao achar, procura a de escopo maior (global)...


