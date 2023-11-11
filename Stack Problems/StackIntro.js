let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

let topElement = stack[stack.length - 1];
console.log("Top element:", topElement); 

let poppedElement = stack.pop();
console.log("Popped element:", poppedElement); 

console.log("Updated stack:", stack); 
