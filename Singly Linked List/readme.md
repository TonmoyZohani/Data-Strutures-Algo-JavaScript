## Visual Representation

After the `push` operations, the linked list transitions as follows:

### 1. Initial State:
```javascript
list.head = null
list.tail = null
list.length = 0

### 2. After list.push("HELLO"):

list.head = Node { val: 'HELLO', next: null }
list.tail = Node { val: 'HELLO', next: null }
list.length = 1

3. After list.push("GOODBYE"):

list.head = Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: null } }
list.tail = Node { val: 'GOODBYE', next: null }
list.length = 2

   list.head                list.tail
       |                       |
       v                       v
   [ HELLO ] --> [ GOODBYE ] --> null

Advantages of a Linked List over Arrays
Below are some advantages of Linked List over Arrays in programming, including:

Dynamic Size: One of the most significant advantages of linked list over arrays is that linked lists can grow or shrink dynamically during runtime. This means that the size of a linked list can be adjusted to accommodate new elements or remove existing elements without having to allocate or deallocate a fixed-size block of memory, as is the case with arrays.
Efficient Insertion and Deletion: Linked lists allow efficient insertion and deletion of elements at any position in the list, whereas arrays require shifting of elements when a new element is added or removed, which can be slow and inefficient for large arrays.
Memory Efficiency: Linked lists use memory more efficiently than arrays. In an array, all elements must be stored in contiguous memory locations, even if some of the elements are not used. In contrast, linked lists only allocate memory for the elements that are used, which can save memory in cases where the size of the data set is unknown or varies over time.
Easy Implementation of Abstract Data Types: Linked lists are easy to use and implement when implementing abstract data types such as stacks, queues, and trees. These data structures require frequent insertion and deletion of elements, which is a task in which linked lists are well-suited.
More Efficient Sorting: In some cases, linked lists can be more efficient for sorting algorithms than arrays. This is because linked lists do not require swapping elements like arrays, which can be time-consuming for large arrays.

