// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }

//     return this.items.pop();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items);
//   }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.isEmpty());
// console.log(stack.getAll());
// stack.print();

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); 
  }

  dequeue() {
    return this.isEmpty() ? "Queue is empty" : this.items.shift();
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" -> "));
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log(queue.dequeue());
console.log(queue.peek()); 
console.log(queue.size());