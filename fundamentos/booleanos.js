let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(Boolean(isAtivo));

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)

console.log('os falsos..')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)


console.log('Fim')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || "Desconhecido")
