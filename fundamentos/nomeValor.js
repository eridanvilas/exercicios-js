// par nome/valor

const saudacao = 'Opa' // contexto lexico 1

function exec(){
  const saudacao = 'Se ta bom ou não' //  contexto lexico 2
  return saudacao
}

// objetos são grupos aninhados de pares  nome/valor

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 80,
  endereco: {
    logradouro: 'Rua Brasil',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec)
console.log(cliente)