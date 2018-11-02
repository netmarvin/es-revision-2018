
function rand( { min = 0, max = 1000 } ) {     // valores randomicos entre 40 e 50...

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)

}


const obj = { max: 50, min: 40, media: 45, diferenca: 10 }

console.log(rand(obj))

console.log(rand({}))  // usando valores padrao...


