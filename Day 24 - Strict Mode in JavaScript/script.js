// Question 1:
// Does the above code snippet run in strict mode? If yes, write an explanation and attach the output.

(function () {
    'use strict';
    var x = 3.14;
    console.log(x);
})();

// Yes, the code snippet runs in strict mode. Let's go through the explanation and the output.

// Explanation
// Immediately Invoked Function Expression (IIFE): The code is wrapped inside an IIFE, which is a function that runs as soon as it is defined. The syntax (function() { ... })(); is used to create and immediately execute a function.

// 'use strict'; Directive: The line 'use strict'; enables strict mode within the function. In JavaScript, strict mode is a way to opt into a restricted variant of JavaScript, which helps catch common coding mistakes and "unsafe" actions such as defining global variables or using reserved keywords.

//output will be 3.14
// Question 2:
'use strict';
y=3.14;
console.log(y);
// What happens when you run the above code in a JavaScript environment with strict mode enabled?

// When you run the code snippet in a JavaScript environment with strict mode enabled, an error will occur. Here's a detailed explanation:

// Explanation
// 1. Strict Mode Activation:
// The 'use strict'; directive enables strict mode for the entire script. In strict mode, JavaScript enforces a stricter set of rules to catch common errors and prevent certain actions.

// 2.Undeclared Variable Assignment:
// In strict mode, variables must be declared using var, let, or const before they are used. The line y = 3.14; attempts to assign a value to a variable y without declaring it first.

// Question 3:
'use strict';
function checkThis(){
    return this;
}
console.log(checkThis());

// What does checkThis() return when executed in strict mode?

// When checkThis() is executed in strict mode, it returns undefined.

// Explanation
// 1. Strict Mode:
// The 'use strict'; directive at the top of the script enables strict mode for the entire script. In strict mode, JavaScript imposes stricter parsing and error handling on the code to help catch common coding mistakes.

// 2. `this` in Strict Mode:
// In non-strict mode, the value of this in a function (when called without an explicit context) defaults to the global object (in a browser, this would be window). However, in strict mode, the value of this is undefined when the function is called as a simple function (not as a method or with a specific context).

// Summary
// In strict mode, calling a standalone function like checkThis() returns undefined for this because strict mode does not allow this to default to the global object.