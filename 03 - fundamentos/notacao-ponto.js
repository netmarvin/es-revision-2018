
console.log(Math.ceil(6.1))    // 7

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)         // Bola




// nota: this.xxxx -> atribuicao do atributo ao objeto criado...

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj1.nome)
console.log(obj2.nome)
obj3.exec()

