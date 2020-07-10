function tratarErrorELancar(erro) {
  // throw new Error('...')
  throw erro
}

function imprimirNomeGrande(obj){
  try{
    console.log(obj.name.ToUpperCase() + '!!!')
  }catch(e){
    tratarErrorELancar(e)
  } finally{
    console.log('Final')
  }
}
  

const obj = { nome: 'Roberto' }
imprimirNomeGrande(obj)