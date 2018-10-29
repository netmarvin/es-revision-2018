
//nota: array em js nao e fixo...
//nota: array e eterogeneo...

const valores = [7.7, 8.9, 6.3, 8.2]

console.log(valores[0], valores[3])   // 7.7 8.2

console.log(valores[4])    // undefined

valores[4] = 10     

console.log(valores[4])   // 10

valores[10] = 9.9     

console.log(valores)    // [ 7.7, 8.9, 6.3, 8.2, 10, <5 empty items>, 9.9 ]


var calcularDobro = function(valor) {
    return valor * 2;
}


valores.push([1,2,3], {id: 3}, false, null, undefined, 500, 'João', 5 + 5, calcularDobro(12))

console.log(valores)

console.log(valores.pop())  //retira

delete valores[0]


//-------------------------------------

/*
valores.concat
valores.copyWithin
valores.every
valores.fill
valores.filter
valores.find
valores.findIndex
valores.forEach
valores.includes
valores.indexOf
valores.join
valores.keys
valores.lastIndexOf
valores.length
valores.map
valores.pop
valores.push
valores.reduce
valores.reduceRight
valores.reverse
valores.shift
valores.slice
valores.some
valores.sort
valores.splice
valores.toString
valores.unshift
valores.values
*/


