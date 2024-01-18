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
    let newNode = new Node(val);

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
    let currentNode = this.head;
    let tailNode = currentNode;

    while (currentNode.next) {
      tailNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = tailNode;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push(100);
list.push(101);
list.push(102);
list.push(103);

list.print();
console.log(list.reverse());
list.print();

// Advantages of a Linked List over Arrays
// Below are some advantages of Linked List over Arrays in programming, including:

// Dynamic Size: One of the most significant advantages of linked list over arrays is that linked lists can grow or shrink dynamically during runtime. This means that the size of a linked list can be adjusted to accommodate new elements or remove existing elements without having to allocate or deallocate a fixed-size block of memory, as is the case with arrays.
// Efficient Insertion and Deletion: Linked lists allow efficient insertion and deletion of elements at any position in the list, whereas arrays require shifting of elements when a new element is added or removed, which can be slow and inefficient for large arrays.
// Memory Efficiency: Linked lists use memory more efficiently than arrays. In an array, all elements must be stored in contiguous memory locations, even if some of the elements are not used. In contrast, linked lists only allocate memory for the elements that are used, which can save memory in cases where the size of the data set is unknown or varies over time.
// Easy Implementation of Abstract Data Types: Linked lists are easy to use and implement when implementing abstract data types such as stacks, queues, and trees. These data structures require frequent insertion and deletion of elements, which is a task in which linked lists are well-suited.
// More Efficient Sorting: In some cases, linked lists can be more efficient for sorting algorithms than arrays. This is because linked lists do not require swapping elements like arrays, which can be time-consuming for large arrays.
