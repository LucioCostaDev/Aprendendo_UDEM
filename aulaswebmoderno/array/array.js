console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados [0]) // todo indice [0] e iniciado como zero
console.log(aprovados [1])
console.log(aprovados [2])
console.log(aprovados [3])

aprovados[3] = 'Paulo' // forma simples de alterar um indice
aprovados.push('Abia') // alterando ou adicionando indice ultilizando o push 
console.log(aprovados.length)
 
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados [8] === undefined) // indice [8] e igual a undefined Resp. TRUE
console.log(aprovados [8] === null)      // indice [8] e igual a null Resp. FALSE



// posição - indice - elemento
// 1-        [0]         Bia
// 2         [1]         Carlos
// 3-        [2]         Ana
// 4-        [3]         Paulo
// 5-        [4]         Abia
// 6-        [5]         undefined
// 7-        [6]         undefined
// 8-        [7]         undefined
// 9-        [8]         undefined
// 10-       [9]         Rafael

console.log(aprovados)
aprovados.sort() // função de ordena ou seja altera a array, ultilizando metodo sort
console.log(aprovados)

delete aprovados[1]
console.log(aprovados [1])
console.log(aprovados [2])

/* posição anterior já ordenado */ 
// posição - indice - elemento
// 1-         [0]         Abia
// 2-         [1]         Ana
// 3-         [2]         Bia

/* posição atual */
// posição - indice - elemento
// 1-        [0]         Abia
// 2-        [1]         undefined (Ana indice [1] foi deletada)
// 3-        [2]         Bia

console.log(aprovados)
aprovados.sort() // função de ordena ou seja altera a array, ultilizando metodo sort
console.log(aprovados)

/*Uma função com o metodo splice serve tanto para add ou remover um elemento dos indices splice(indice, elemento)*/
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // a função splice aqui vai remover indice [1] 
console.log(aprovados)
// ['Bia', 'Ana']

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // a função splice aqui vai remover os elementos dos indices [1][2] 
console.log(aprovados)
// ['Bia' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // a função splice aqui vai remover os elementos dos indices [1][2] e add ao mesmo tempo 'Elemento1' e 'Elemento2'
console.log(aprovados)
// ['Bia', 'Elemento1', 'Elemento2' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // a função splice aqui não vai remover os elementos apenas add apartir do indice [1] os 'Elemento1' e 'Elemento2'
console.log(aprovados)
// ['Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana' ]