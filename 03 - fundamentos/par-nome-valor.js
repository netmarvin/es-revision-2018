
// nota: contexto lexico (palavra)

const saudacao = 'Opa'  // contexto lexico 1

function exec(){
    const saudacao = 'Falaa'    // contexto lexico 2
    return saudacao
}


// objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',    
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}


console.log(saudacao)      // Opa
console.log(exec())        // Falaa
console.log(cliente)       // { nome: 'Pedro', idade: 32, peso: 90, endereco: { logradouro: 'Rua Muito Legal', numero: 123 } }


