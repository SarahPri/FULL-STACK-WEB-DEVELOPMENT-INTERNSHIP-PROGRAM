// 1.
// Show how a variable works on different scopes.
// Global Scope
let globalVar = 'I am global';

function demoScopes() {
    // Function (Local) Scope
    let localVar = 'I am local';

    if (true) {
        // Block Scope
        let blockVar = 'I am block scoped';

        console.log('Inside block:');
        console.log('globalVar:', globalVar); // Accessible
        console.log('localVar:', localVar);   // Accessible
        console.log('blockVar:', blockVar);   // Accessible
    }

    console.log('Inside function but outside block:');
    console.log('globalVar:', globalVar); // Accessible
    console.log('localVar:', localVar);   // Accessible
    console.log('blockVar:', blockVar);   // ReferenceError: blockVar is not defined
}

console.log('Outside function:');
console.log('globalVar:', globalVar);   // Accessible
console.log('localVar:', localVar);     // ReferenceError: localVar is not defined
console.log('blockVar:', blockVar);     // ReferenceError: blockVar is not defined

demoScopes();


// Explanation
// Global Scope:

// globalVar is declared outside of any function or block, so it is accessible everywhere in the code.
// Function (Local) Scope:

// localVar is declared inside the demoScopes function. It is accessible anywhere within this function but not outside it.
// Block Scope:

// blockVar is declared inside the if block using let. It is accessible only within this block and any nested blocks.

// Console Output
// Inside the Block:

// All variables are accessible here.
    // globalVar: I am global
    // localVar: I am local
    // blockVar: I am block scoped
// Inside the Function but Outside the Block:

// globalVar and localVar are accessible, but blockVar is not.

    // globalVar: I am global
    // localVar: I am local
    // ReferenceError: blockVar is not defined

// Outside the Function:

// Only globalVar is accessible. localVar and blockVar are not accessible.

    // globalVar: I am global
    // ReferenceError: localVar is not defined
    // ReferenceError: blockVar is not defined

    // 2. Create a function in the second JavaScript file that returns the sum of the values passed to it as arguments.

    // Function to calculate the sum of all arguments
function sum(...values) {
    // Calculate the sum using the reduce method
    return values.reduce((total, current) => total + current, 0);
}

// Export the function to make it available for import
export default sum;


// Explanation
// Rest Parameter Syntax (...values):

// ...values allows the function to accept any number of arguments as an array. Each argument passed to the function is stored in the values array.
// reduce Method:

// values.reduce((total, current) => total + current, 0) computes the sum of all elements in the values array.
// reduce takes a callback function that accumulates a value (total) and adds each current value to it. The 0 is the initial value of the accumulator.
// Export Statement:

// export default sum; makes the sum function available for import in other JavaScript files.

// Explanation
// Import Statement:

// import sum from './sum.js'; imports the sum function from the sum.js file.
// Function Call:

// sum(1, 2, 3, 4, 5) calls the sum function with five arguments.
// Console Output:

// The result 15 is logged to the console, which is the sum of the arguments passed to the function.
// This approach allows you to easily sum any number of arguments passed to the sum function and demonstrates how to work with modules in JavaScript.


// ====================================================
// 3.Write a function that logs the value of this when called in the global scope. Discuss how this behaves when the function is called directly (e.g., myFunction()).
function logThis() {
    console.log(this);
}

// Call the function directly in the global scope
logThis();

// ====================================================
// Explanation
// Function Definition:

// logThis() is a function that logs the value of this to the console.
// Calling the Function:

// When logThis() is called directly in the global scope, this refers to the global object.
// Behavior of this in the Global Scope

// 1. In Non-Strict Mode:

// When logThis() is called in non-strict mode (the default mode in most environments), this refers to the global object.
// In a browser environment, the global object is window.
// So, console.log(this) will output window or global (in Node.js environments).

// 2. In Strict Mode:

// When logThis() is called in strict mode (by adding 'use strict'; at the top of the file or function), this is undefined.
// Strict mode eliminates the default binding of this to the global object, making it undefined in contexts where it would otherwise be the global object.
'use strict';

function logThis() {
    console.log(this);  // Logs undefined in strict mode
}

logThis();


// Summary
// Non-Strict Mode: In non-strict mode, calling logThis() directly in the global scope logs the global object (window in browsers).
// Strict Mode: In strict mode, calling logThis() directly results in this being undefined.
// The behavior of this is important for understanding how context affects function execution and object-oriented programming in JavaScript.

// 4. Modify the above function to use strict mode ('use strict';). Call the function again and explain any differences in the value of this.
function logThis() {
    'use strict';  // Enable strict mode within this function
    console.log(this);
}

// Call the function directly in the global scope
logThis();

// Explanation
// Strict Mode:

// By adding 'use strict'; at the beginning of the logThis function, strict mode is enabled for the duration of this function.
// Behavior of this in Strict Mode:

// In strict mode, this does not default to the global object (window in browsers or global in Node.js).
// Instead, this is undefined when the function is called in the global scope.

// 5. Create an arrow function that logs the value of this. Explain how this behaves within an arrow function compared to a regular function.
const logThisArrow = () => {
    console.log(this);
};

// Call the arrow function directly in the global scope
logThisArrow();


// Explanation
// Arrow Function Definition:

// const logThisArrow = () => { ... } defines an arrow function that logs the value of this.
// Behavior of this in Arrow Functions:

// Arrow functions do not have their own this. Instead, they capture this from the surrounding lexical context at the time they are defined.
// When called in the global scope, if no surrounding context has set this, this will refer to the global object (window in browsers or global in Node.js), but it behaves differently due to the lexical scoping.

// Differences Between Arrow Functions and Regular Functions
// Arrow Functions:

// this Binding: Arrow functions do not bind this themselves. They use this from the surrounding context (lexical scope). If this is not explicitly set in the surrounding context, it may default to the global object, but this behavior is less intuitive than in regular functions.
// Usage: Arrow functions are often used in scenarios where you need this from the surrounding context, such as in callbacks or methods inside classes.
// Regular Functions:

// this Binding: Regular functions have their own this binding, which depends on how the function is called (e.g., as a method of an object, as a constructor, or in the global scope).
// Global Scope: When called directly in the global scope, regular functions bind this to the global object (in non-strict mode) or undefined (in strict mode).
// Summary
// Arrow Functions: Inherits this from the surrounding lexical context. In global scope, this typically refers to the global object but is bound in the context where the arrow function is defined.
// Regular Functions: Have their own this context, which is determined by how the function is invoked. this can be the global object, an object, or undefined in strict mode.
// Understanding the behavior of this in both regular and arrow functions helps manage scope and context effectively in JavaScript.