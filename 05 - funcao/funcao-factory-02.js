
function criarProduto(nome, preco) {

    return {
        nome,
        preco,
        desconto: 0.1
    }

}

let notebook = criarProduto('Notebook', 2199.99)
let ipad = criarProduto('iPad', 545.00)

console.log(notebook)
console.log(ipad)

