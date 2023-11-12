class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;

    // Traverse the list until the last node is reached
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null; // Remove the reference to the last node
    this.length--;

    // If the list becomes empty, reset head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current; // Return the removed node
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

list.traverse(); // Output: HELLO, GOODBYE, !
