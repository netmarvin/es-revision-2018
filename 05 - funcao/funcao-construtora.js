
function Carro(velocidadeMaxima = 200, delta = 5) {

    // atributo privado...
    let velocidadeAtual = 0

    // metodo publico...
    this.acelerar = function() {

        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }

    }

    // metodo publico...
    this.getVelocidadeAtual= function() {
        return velocidadeAtual
    }
    
}


const uno = new Carro()
uno.acelerar()
//console.log(uno.velocidadeAtual)   // undefined...
console.log(uno.getVelocidadeAtual())

console.log(typeof(Carro))
console.log(typeof(uno))



