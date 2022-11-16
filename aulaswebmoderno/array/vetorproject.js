let enqueue = [];


enqueue.push(1);
console.log(enqueue); // [1]

enqueue.push(2);
console.log(enqueue); // [1,2]

enqueue.push(3);
console.log(enqueue); // [1,2,3]

enqueue.push(4);
console.log(enqueue); // [1,2,3,4]

enqueue.push(5);
console.log(enqueue); // [1,2,3,4,5]

//-----------------------------------

console.log(enqueue.pop()); //  5
console.log(enqueue); // [1,2,3,4];

console.log(enqueue.pop()); //  4
console.log(enqueue); // [1,2,3];

console.log(enqueue.pop()); //  3
console.log(enqueue); // [1,2];

console.log(enqueue.pop()); //  2
console.log(enqueue); // [1];

console.log(enqueue.pop()); //  1
console.log(enqueue); // []; -> vazia

console.log(enqueue.pop()); //  undefined

function reverse(str) {
  let stack = [];
  // push letter into stack
  for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
  }
  // pop letter from the stack
  let reverseStr = '';
  while (stack.length > 0) {
      reverseStr += stack.pop();
  }
  return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ