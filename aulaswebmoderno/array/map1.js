const nums = [1, 2, 3, 4, 5]

//for com proposito
let resultado = nums.map(function(e) {
    return e * 2
})

// (e) e um parametro ou elemento
console.log(resultado)

const soma10 = e => e + 10 // funçao para soma
const triplo = e => e * 3   // função pata multiplicar
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(`.`, `,`)}`

//nums.map(soma10)ARRAY1 .map(triplo)ARRAY2 .map(paraDinheiro)ARRAY3
resultado = nums.map(soma10).map(triplo).map(paraDinheiro) 
console.log(resultado)