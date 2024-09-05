// let arr = [2,4,6,8]

// class Stack {
//   constructor(arr){
//     this.stack=arr
//     this.top = this.arr.length -1
//   }
//   push(ele){
//     this.stack[this.stack.length] = ele;
//     return this.stack
//   }

//   pop(ele){
//     if(this.top == -1){
//       console.log("Stack Underflow");
//       return;
//     }

//     var x = this.arr[this.top]
//     this.top = this.top -1
//     this.arr = this.arr.slice(0, this.top + 1)
//     console.log(`${x}: {$this.arr}`)
//     return

//   }
// }

// let stack1 = new Stack(arr)


// stack1.push(10)
// console.log(arr);
// console.log(stack1);

let stack = [2, 4, 6, 8];

// Check if 6 is in the stack
let isFound = stack.includes(6);
console.log(isFound); // Output: true

// Check if 10 is in the stack
isFound = stack.includes(10);
console.log(isFound); // Output: false
