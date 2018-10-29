
const peso1 = 1.0

const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media)

console.log(media.toFixed(2))

console.log(typeof media)

console.log(typeof Number)


//--------------------------------------------

const valor1 = parseInt(media)

console.log(valor1)


console.log(isNaN('palavra'))  // true -> nao e um numero....

console.log(isNaN(3242))       // false -> e um numero...


//--------------------------------------------

console.log(Number.MAX_SAFE_INTEGER)

console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.MAX_VALUE)

console.log(Number.MIN_VALUE)


// Number.isFinite
// Number.isInteger
// Number.isNaN
// Number.length
// Number.MAX_SAFE_INTEGER
// Number.MAX_VALUE
// Number.MIN_SAFE_INTEGER
// Number.MIN_VALUE
// Number.name
// Number.NaN
// Number.parseFloat
// Number.parseInt
// Number.POSITIVE_INFINITY
// Number.toString









