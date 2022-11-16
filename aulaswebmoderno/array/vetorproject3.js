// inserir um elemento
let enqueue = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`]
enqueue.unshift()
console.log(`Elemento adicionado: ${enqueue}`)

// deletar um elemento
const dequeue = enqueue.shift()
console.log(`Elemento removido: ${dequeue}`)

//retorna numeros de elementos
let numeroElementos = enqueue
console.log(`Numeros de Elementos da pilha: ${numeroElementos.length}`)
for (let i = 0; i < numeroElementos.length; ++1;)
console.log(numeroElementos)

// Adicionar em uma posição especificada
enqueue.splice(7, 8)
console.log(enqueue); 


