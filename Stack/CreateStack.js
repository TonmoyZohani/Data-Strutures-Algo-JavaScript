class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.unshift(item);
  }

  pop() {
    return this.items.shift();
  }

  peek(){
    return this.items[0];
  }
}

const stack = new Stack();

stack.push(12);
stack.push(8);
stack.push(15);
stack.push(5);
stack.push(11);

console.log(stack.items); // [ 11, 5, 15, 8, 12 ]
console.log(stack.pop()); // 11
console.log(stack.items); // [ 5, 15, 8, 12 ]
console.log(stack.peek()); // 5
