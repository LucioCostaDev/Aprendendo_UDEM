const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // metodo pop exclui o ultimo elemento
console.log(pilotos)
// ['Vettel', 'Alonso', 'Raikkonen']

pilotos.push('Verstappen')
console.log(pilotos)
// ['Vettel', 'Alonso', 'Raikkonen', 'Verstappen']

pilotos.shift() // metodo remove o primeiro elemento 
console.log(pilotos)
// ['Alonso', 'Raikkonen', 'Verstappen']

pilotos.unshift('Hamilton') // metodo adiciona no primeiro elemento
console.log(pilotos)
// ['Hamilton', 'Alonso', 'Raikkonen', 'Verstappen']

//splice pode adicionar e remover elementos
// adcionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)
// ['Hamilton', 'Alonso', 'Botas', 'Massa', 'Raikkonen', 'Verstappen']

//Remover 
pilotos.splice(3, 1)
console.log(pilotos)
// ['Hamilton', 'Alonso', 'Botas', 'Raikkonen', 'Verstappen']

const algunsPilotos1 = pilotos.slice(2) // nova array e metodo que pega os elementos a apartir do indice[2]
console.log(algunsPilotos1)
// ['Botas', 'Raikkonen', 'Verstappen']

const algunsPilotos2 = pilotos.slice(1, 4) // nova array e metodo que pega apenas os elementos a apartir do indice[1] ate o elemento [3]
console.log(algunsPilotos2)   
// ['Alonso', 'Botas', 'Raikkonen']