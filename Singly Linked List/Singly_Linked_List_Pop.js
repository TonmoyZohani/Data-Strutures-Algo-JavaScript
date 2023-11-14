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

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
    }
  }

  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return this.push(val);
    }

    if (index === 0) {
      return this.unShift(val);
    }

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let prevNode = this.get(index - 1);
    let removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;
    return removeNode;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push("last");
list.set(4, "Lol");
list.insert(1, "Tonmoy");

// console.log(list.get(1));

list.remove(1, "Tonmoy");
console.log(list.get(1));
console.log(list);
