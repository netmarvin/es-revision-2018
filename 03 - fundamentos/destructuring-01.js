
// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa

console.log(nome, idade)

//---

const { nome: n, idade: i} = pessoa

console.log(n, i)

//---

const { bemHumorada } = pessoa

console.log(bemHumorada)  // undefined

//---

const { sobrenome = 'Maria' } = pessoa

console.log(sobrenome)

//---

const { endereco: { logradouro, numero, cep } } = pessoa

console.log(logradouro, numero, cep)    // Rua ABC 1000 undefined









