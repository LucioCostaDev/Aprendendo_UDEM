// let enqueue = new Array ('Bia', 'Carlos', 'Ana')
// console.log(enqueue)

// enqueue = ['Bia', 'Carlos', 'Ana']
// console.log(enqueue   [0]) 
// console.log(enqueue   [1])
// console.log(enqueue   [2])
// console.log(enqueue   [3])

function Queue(){
  this.elements = []
}

// método enqueue adiciona um elemento no final da fila
Queue.prototype.enqueue = function (e) {
  // insira o novo elemento
  this.elements.push(e);
}

// remover um elemento da frente da fila
Queue.prototype.dequeue = function () {
  return this.elements.shift();
}

// verifique se a fila está vazia
Queue.prototype.isEmpty = function () {
  return this.elements.length == 0;
}

// obter o elemento na frente da fila
Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements[0] : undefined;
}

// para consultar o comprimento de uma fila
Queue.prototype.length = function () {
  return this.elements.length;
}

// para criar uma nova fila a partir da função construtora Queue()
let q = new Queue();

// para enfileirar números de 1 a 7 
for (let i = 1; i <= 7; i++){
  q.enqueue(i);  
}

// para obter o valor da variável q 
console.log(q);

// para obter o número na frente da fila 
console.log(`Número na frente da fila: ${q.peek()}`);

// para obter o comprimento atual da fila
console.log(`O comprimento da fila: ${q.length()}`);

// para remover o elemento na frente da fila (retirar da fila todos os elementos)
while (!q.isEmpty()){
  console.log(q.dequeue());
}

