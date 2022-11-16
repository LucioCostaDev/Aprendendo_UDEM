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

// Adicionar em uma posição especificada ou deletar
enqueue.splice(1, 0, '25')
console.log(enqueue);

enqueue.splice(0,2)
console.log(enqueue);



