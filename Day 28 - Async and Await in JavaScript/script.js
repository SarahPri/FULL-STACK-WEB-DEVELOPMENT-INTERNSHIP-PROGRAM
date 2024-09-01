//Problem Statement 1:
//  Create a function with async and await that calls another function that mimics the behavior of fetching data from the server using the setTimeout function and promises. Now loop through the data using the map method and print the title of each item.
// Function to mimic fetching data from a server
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                { id: 1, title: 'First item' },
                { id: 2, title: 'Second item' },
                { id: 3, title: 'Third item' }
            ];
            resolve(data); // Simulate successful data fetch
        }, 1000); // Simulate a 1-second delay
    });
}

// Async function to fetch and process data
async function processData() {
    try {
        // Fetch the data
        const data = await fetchData();
        
        // Loop through the data and print each title
        data.map(item => {
            console.log(item.title);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the async function to execute the process
processData();


// Explanation
// fetchData Function:

// This function returns a promise that resolves after a 1-second delay with an array of objects. Each object contains an id and a title.
// setTimeout is used to mimic network delay, and resolve(data) simulates successful data retrieval.
// processData Async Function:

// async Keyword: Declares an asynchronous function that allows using await inside it.
// await fetchData(): Waits for the fetchData function to complete and returns the resolved data.
// data.map(item => { ... }): Iterates over the array of data and prints the title of each item to the console.
// try...catch: Handles any potential errors that might occur during data fetching or processing.
// Calling processData:

// The processData function is called to execute the data fetching and processing. It prints each item's title to the console.

// Problem Statement 2:
// Create an async function named 'delayedGreeting' that waits for a greeting “Hello” to be resolved after 3 seconds using setTimeout. The function should then return the greeting.
// Log the following messages to the console: "Before execution" before calling the function, log the resolved greeting to understand the async function's execution flow, and "After execution" after calling it.

// Define the async function delayedGreeting
async function delayedGreeting() {
    // Return a promise that resolves with "Hello" after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello');
        }, 3000); // 3 seconds delay
    });
}

// Function to demonstrate the execution flow
async function demonstrateGreeting() {
    console.log('Before execution'); // Log message before calling the async function

    // Call the async function and log the resolved value
    const greeting = await delayedGreeting();
    console.log(greeting); // Log the resolved greeting

    console.log('After execution'); // Log message after the async function has completed
}

// Call the function to demonstrate the async behavior
demonstrateGreeting();

// Explanation
// delayedGreeting Function:

// async Keyword: Declares the function as asynchronous, allowing the use of await inside it.
// new Promise((resolve) => { ... }): Creates a new promise that will resolve with "Hello" after a delay.
// setTimeout(() => { resolve('Hello'); }, 3000);: Simulates a 3-second delay before resolving the promise with the greeting "Hello".
// demonstrateGreeting Function:

// console.log('Before execution');: Logs the message to the console before calling the delayedGreeting function.
// const greeting = await delayedGreeting();: Awaits the resolution of delayedGreeting and stores the result in greeting.
// console.log(greeting);: Logs the resolved greeting "Hello" to the console.
// console.log('After execution');: Logs the message to the console after the async function completes.
// Calling demonstrateGreeting:

// The demonstrateGreeting function is called to execute the asynchronous operation and log the messages.
// Output
// After 3 seconds, the console will display:
