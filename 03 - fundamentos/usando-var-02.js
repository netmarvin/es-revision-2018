
// dica: evite escopo global...tanto no navegador quanto no node...
// nota: var tem escopo global e escopo de funcao...

var numero = 1

{
    var numero = 2
    console.log('dentro: ' + numero)
}

console.log('fora: ' + numero)


