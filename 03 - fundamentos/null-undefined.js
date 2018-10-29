
//-------referencia x valor---------------------------------------------------

const a = {name: 'Teste'}
console.log(a)              // { name: 'Teste' }

//nota: objeto b recebendo o endereco de referencia do objeto a...
//nota: os dois objetos apontam para o mesmo endereco de referencia...
//nota: chama-se atribuicao por referencia...
const b = a
console.log(b.name)         // Teste

b.name = 'Opa'
console.log(b.name)         // Opa

console.log(a.name)         // Opa



//nota: para tipo primitivo nao ha passagem de referencia...
//nota: chama-se atribuicao por valor...
let c = 3
let d = c

d++

console.log(c)
console.log(d)


//-------undefined---------------------------------------------------

let valor // nao inicializada...
console.log(valor)           // undefined

valor = null    // ausencia de valor...
console.log(valor)           // null

//nota: cuidado com variaveis que podem estar nulas...
//console.log(valor.toString())    // TypeError: Cannot read property 'toString' of null


const produto = {}
console.log(produto.preco)   // undefined
console.log(produto)         // {}

produto.preco = 3.50

console.log(produto)         // { preco: 3.5 }


//nota: retirar um atributo de um objeto...
delete produto.preco

console.log(produto.preco)    // undefined
console.log(produto)          // {}


//nota: resete variaveis com:
// referencia = null
// string = ''
// numero = 0
// booleano = false

//nota: evite fazer atribuicao explicita com undefined...

