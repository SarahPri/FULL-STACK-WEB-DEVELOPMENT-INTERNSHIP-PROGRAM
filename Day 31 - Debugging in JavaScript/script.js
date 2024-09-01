// Question 1: Create a currying function that adds three numbers, returns the output, and console the output.
// Curried function to add three numbers
const addThreeNumbers = (a) => (b) => (c) => a + b + c;

// Call the curried function with three numbers and log the output
const result = addThreeNumbers(20)(20)(20);
console.log(result); // Output: 30


// Explanation
// Curried Function Definition:

// addThreeNumbers is a curried function where:
// The first function takes the first argument a and returns another function.
// The second function takes the second argument b and returns another function.
// The third function takes the third argument c and returns the sum of a, b, and c.
// Function Invocation:

// addThreeNumbers(5)(10)(15) calls the curried function with the numbers 5, 10, and 15.
// Each call returns a new function until the final function is called, which computes the sum of the three numbers.
// Console Output:

// console.log(result) logs the result of adding 5, 10, and 15, which is 30.
// Summary
// Currying: Allows you to break down a function that takes multiple arguments into a series of functions that each take a single argument.
// Usage: Useful for creating more modular and reusable functions where arguments can be provided in stages.



// Question 2: Create two objects, person1 and person2, each with a name property. Write a function introduce that logs a greeting and the name of the object it belongs to. Use call to borrow introduce for person2 using person1 as the context.
// Define the first object with a name property
const person1 = {
    name: 'Alice',
    introduce: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// Define the second object with a name property
const person2 = {
    name: 'Sarah'
};

// Borrow the introduce method from person1 and use it with person2 as context
person1.introduce.call(person2); // Output: Hello, my name is Bob.


//====================
// Explanation
// Object Definitions:

// person1 has a name property and an introduce method that logs a greeting using this.name.
// person2 only has a name property and does not have an introduce method.
// introduce Method:

// The introduce method in person1 uses this to refer to the object that the method belongs to.
// Using call:

// person1.introduce.call(person2) borrows the introduce method from person1 and sets person2 as the context (this value) for that method.
// As a result, the introduce method logs a greeting with person2's name.


// =====================================
// Question 3: Extend the previous task by adding a language parameter to the introduce function, allowing it to include a favorite programming language in the greeting. Use apply to borrow this extended function for person1 using person2, passing in the language as an argument.
// Define the first object with a name property and the extended introduce function
const person3 = {
    name: 'Alice',
    introduce: function(language) {
        console.log(`Hello, my name is ${this.name}. My favorite programming language is ${language}.`);
    }
};

// Define the second object with a name property
const person4 = {
    name: 'Sarah'
};

// Use apply to borrow the introduce function from person1 and apply it to person2
// Pass in the language argument as an array
person1.introduce.apply(person2, ['JavaScript']); // Output: Hello, my name is Bob. My favorite programming language is JavaScript.

// ========================================

// Explanation
// Extended introduce Function:

// introduce now takes an additional parameter language.
// It logs a greeting that includes the name of the object and the favorite programming language.
// Using apply:

// person1.introduce.apply(person2, ['JavaScript']) borrows the introduce function from person1 and uses person2 as the context.
// The second argument to apply is an array containing the argument(s) for the function, in this case, ['JavaScript'].
// Result:

// The function logs a greeting with person2's name and the provided programming language.