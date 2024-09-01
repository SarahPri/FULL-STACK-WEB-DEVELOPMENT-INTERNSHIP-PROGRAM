// Question 1:
// What happens when the below code snippet is executed?
console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
})

console.log('end');

// Explanation
// 1. console.log('start');:
// This line prints the string 'start' to the console.
// 2. const promise1 = new Promise((resolve, reject) => { console.log(1); }):
// . A new Promise is created.
// . The executor function (the function passed to the Promise constructor) runs immediately and synchronously.
// . Inside the executor function, console.log(1); is executed, which prints 1 to the console.
// . Important: The promise is neither resolved nor rejected in this snippet. It just executes the code inside the executor function.
// 3. console.log('end');:
// . This line prints the string 'end' to the console.

// Output
// Given the synchronous nature of JavaScript execution for the lines above, the output in the console will be:

// Key Points
// . Synchronous Execution: The executor function of a Promise runs synchronously, which means that any code inside the executor function runs immediately, not asynchronously.
// . No .then or .catch Methods: Since there are no .then or .catch methods chained to promise1, nothing else happens after the promise creation.
// . Unresolved/Unrejected Promise: The promise (promise1) is created but is neither resolved nor rejected because no resolve() or reject() calls are made in the executor function.

// This code snippet illustrates how JavaScript handles promise creation and the immediate execution of its executor function synchronously, without involving the event loop for asynchronous operations.

// Question 2:
// Create a promise that resolves with the value Resolved! after a 1000ms delay using setTimeout. After the promise is resolved, use .then to pass console.log and display the resolved value.

const myPromise = new Promise((resolve, reject) => {
    // Use setTimeout to simulate an asynchronous operation with a delay of 1000ms
    setTimeout(() => {
        resolve('Resolved!');  // Resolve the promise with the value 'Resolved!'
    }, 1000);
});

// Use .then() to handle the resolved value of the promise
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);  // This will log 'Resolved!' to the console
});


// Explanation
// 1. Creating the Promise:

// . new Promise((resolve, reject) => { ... }): This creates a new promise object. The executor function passed to the promise constructor is immediately executed.
// . setTimeout(() => { resolve('Resolved!'); }, 1000);: Inside the executor function, setTimeout is used to simulate an asynchronous delay of 1000 milliseconds (1 second). After the delay, the promise is resolved with the value "Resolved!".

// 2. Handling the Resolved Value:

// .then((resolvedValue) => { console.log(resolvedValue); });: This method is chained to the promise object myPromise. It defines what should happen when the promise is resolved. The console.log(resolvedValue) logs the resolved value ("Resolved!") to the console.


// Question 3:
// Create another promise. Now have it reject with a value of Rejected! without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch


const myRejectedPromise = new Promise((resolve, reject) => {
    // Immediately reject the promise with the value 'Rejected!'
    reject('Rejected!');
});

// Use .catch() to handle the rejected value of the promise
myRejectedPromise.catch((rejectedValue) => {
    console.log(rejectedValue);  // This will log 'Rejected!' to the console
});
