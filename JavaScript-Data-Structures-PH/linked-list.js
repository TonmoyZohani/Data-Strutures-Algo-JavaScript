// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const head = new Node(10);

// head.next = new Node(20);

// head.next.next = new Node(30);

// console.log(head);

// let temp = head;

// while(temp!==null){
//   console.log(temp.value);
//   temp = temp.next;
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   append(value) {
//     const newNode = new Node(value);

//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.length++;
//   }

//   prepend(value) {
//     const newNode = new Node(value);

//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }

//     this.length++;
//   }

//   insert(index, value) {
//     if (index < 0 || index > this.length) {
//       return false;
//     }

//     if (index === 0) {
//       this.prepend(value);
//       return true;
//     }

//     if (index === this.length) {
//       this.append(value);
//       return true;
//     }

//     const newNode = new Node(value);
//     let currentNode = this.head;
//     let currentIndex = 0;

//     while (currentIndex < index - 1) {
//       currentNode = currentNode.next;
//       currentIndex++;
//     }

//     newNode.next = currentNode.next;
//     currentNode.next = newNode;

//     this.length++;
//     return true;
//   }

//   remove(index) {
//     // Handle edge cases
//     if (index < 0 || index >= this.length) {
//       return null; // or throw new Error("Index out of bounds");
//     }

//     // If list has only one node
//     if (this.length === 1) {
//       const removedNode = this.head;
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//       return removedNode;
//     }

//     // Remove from head
//     if (index === 0) {
//       const removedNode = this.head;
//       this.head = this.head.next;
//       this.length--;

//       if (this.length === 0) {
//         this.tail = null;
//       }
//       return removedNode;
//     }

//     // Remove from middle or tail
//     let currentNode = this.head;
//     let previousNode = null;
//     let currentIndex = 0;

//     // Traverse to the node to remove
//     while (currentIndex < index) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//       currentIndex++;
//     }

//     // Remove the node
//     previousNode.next = currentNode.next;

//     // If we removed the tail, update tail pointer
//     if (index === this.length - 1) {
//       this.tail = previousNode;
//     }

//     this.length--;
//     return currentNode;
//   }

//   print() {
//     let currentNode = this.head;

//     while (currentNode !== null) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.append(10); // List: 10
// list.append(30); // List: 10 -> 30
// list.insert(1, 20); // List: 10 -> 20 -> 30
// list.insert(0, 5); // List: 5 -> 10 -> 20 -> 30
// list.insert(4, 40); // List: 5 -> 10 -> 20 -> 30 -> 40
// list.print(); // Output: 5, 10, 20, 30, 40

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.front = null;  // First element in queue (to be removed)
//     this.rear = null;   // Last element in queue (most recently added)
//     this.length = 0;
//   }

//   // Add to the end of the queue (enqueue)
//   enqueue(value) {
//     const newNode = new Node(value);

//     if (this.isEmpty()) {
//       // If queue is empty, new node becomes both front and rear
//       this.front = newNode;
//       this.rear = newNode;
//     } else {
//       // Add to the end and update rear pointer
//       this.rear.next = newNode;
//       this.rear = newNode;
//     }

//     this.length++;
//     return this;
//   }

//   // Remove from the front of the queue (dequeue)
//   dequeue() {
//     if (this.isEmpty()) {
//       return null; // or throw new Error("Queue is empty");
//     }

//     const removedNode = this.front;

//     if (this.front === this.rear) {
//       // Only one element in queue
//       this.front = null;
//       this.rear = null;
//     } else {
//       // Move front pointer to next node
//       this.front = this.front.next;
//     }

//     this.length--;
//     return removedNode.value;
//   }

//   // Peek at the front element without removing it
//   peek() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.front.value;
//   }

//   // Check if queue is empty
//   isEmpty() {
//     return this.length === 0;
//   }

//   // Get the size of the queue
//   size() {
//     return this.length;
//   }

//   // Print the queue (for debugging)
//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//       return;
//     }

//     let currentNode = this.front;
//     const elements = [];

//     while (currentNode !== null) {
//       elements.push(currentNode.value);
//       currentNode = currentNode.next;
//     }

//     console.log("Queue:", elements.join(" → "));
//   }

//   // Clear the queue
//   clear() {
//     this.front = null;
//     this.rear = null;
//     this.length = 0;
//   }
// }

// console.log('Test')

// Define a simple Stack class
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Function to check for valid parentheses
function isValidParentheses(s) {
  const stack = new Stack();
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.isEmpty() || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

// Example usage:
console.log(isValidParentheses("()"));        // true
console.log(isValidParentheses("({[]})"));    // true
console.log(isValidParentheses("({[)]}"));    // false
console.log(isValidParentheses("((("));       // false
