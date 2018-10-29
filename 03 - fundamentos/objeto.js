
const prod1 = {}

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 2999.90
prod1['Desconto Legal'] = 0.40   // evitar este tipo de notacao de atributos com espacos...

console.log(prod1)   // { nome: 'Celular Ultra Mega', preco: 2999.9, 'Desconto Legal': 0.4 }


const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99,
    desconto: 0.40,
    fabricante: {
        cnpj: 4464464331,
        nome: 'Hering'
    }
}


console.log(prod2)   // { nome: 'Camisa Polo', preco: 79.99, desconto: 0.4, fabricante: { cnpj: 4464464331, nome: 'Hering' } }

console.log(prod2.fabricante.nome)  // Hering


