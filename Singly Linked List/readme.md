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



