function compras(trabalho1, trabalho2){
  const comprarSorvere = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvere // operador unario

  return { comprarSorvere, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
