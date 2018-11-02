
let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

//-------------------------------------------------------------

// criando uma variavel maluca: sem var e let!!!
abc = 3   // nao faca isto...

console.log('')
console.log(abc)                   // 3
console.log(this.abc)              // undefined
console.log(global.abc)            // 3
console.log(module.exports.abc)    // undefined


var def = 10

console.log('')
console.log(def)                   // 10
console.log(this.def)              // undefined
console.log(global.def)            // undefined
console.log(module.exports.def)    // undefined

let ghi = 20

console.log('')
console.log(ghi)                   // 20
console.log(this.ghi)              // undefined
console.log(global.ghi)            // undefined
console.log(module.exports.ghi)    // undefined

//-------------------------------------------------------------

console.log('')
console.log(this)
//console.log(global)
console.log(module.exports)
console.log(this === module.exports)


//-------------------------------------------------------------

global.teste = 'Maria'

console.log('')
console.log(global.teste)







