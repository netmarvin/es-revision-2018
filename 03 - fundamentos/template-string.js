
const nome = 'Rebeca'

const concatenacao = 'Olá ' + nome + '!'


const template = `
    Olá
    ${nome}!`


console.log(nome)    

console.log(template)



// expressoes...
console.log(`1 + 1 = ${1 + 1}`)


// pode tambem funcoes...etc...

const up = (texto) => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)

