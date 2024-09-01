// 1. Create an IIFE that invokes an alert with a message
(function () {
    // This is the IIFE function
    alert('Hello Everyone!');
})();

// Explanation
// IIFE Definition:

// The IIFE is defined by wrapping the function expression in parentheses: (function() { ... }).
// This creates a function expression rather than a function declaration.
// Immediate Invocation:

// The () at the end immediately invokes the function after it is defined.
// This results in the function executing right away, which in this case triggers the alert.


//==========================================
// Summary
// Purpose of IIFE: Used to create a new scope and execute code immediately. It helps in avoiding global variable conflicts and can be useful for initialization code that should run once.
// Usage of alert: The alert function displays a modal dialog with a message and an OK button.
// This pattern is helpful for encapsulating logic and avoiding interference with other parts of your code.

// 2.Create two functions, one which fetches the data, and the other function uses setInterval and setTimeout methods. Loop through the data using the map method.

// Function to fetch data from a placeholder API
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulated data fetching
            const data = [
                { id: 1, title: 'First item' },
                { id: 2, title: 'Second item' },
                { id: 3, title: 'Third item' }
            ];
            resolve(data); // Resolve with simulated data
        }, 1000); // Simulate a 1-second delay
    });
}

// Function that uses setInterval and setTimeout to handle data
async function processData() {
    try {
        // Fetch data
        const data = await fetchData();
        
        // Use setInterval to repeatedly log a message
        const intervalId = setInterval(() => {
            console.log('Processing data...');
        }, 2000); // Log message every 2 seconds
        
        // Use setTimeout to stop the interval after 5 seconds
        setTimeout(() => {
            clearInterval(intervalId);
            console.log('Stopped processing data.');
            
            // Loop through the data and log each title using map
            data.map(item => {
                console.log(item.title);
            });
        }, 5000); // Stop after 5 seconds
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and process data
processData();


// Explanation
// fetchData Function:

// Simulates Data Fetching: Returns a promise that resolves with an array of objects after a 1-second delay.
// setTimeout: Used to simulate the delay in data fetching.
// processData Function:

// await fetchData(): Waits for the fetchData promise to resolve and retrieves the data.
// setInterval: Logs "Processing data..." every 2 seconds to simulate ongoing processing.
// setTimeout: After 5 seconds, stops the interval logging with clearInterval and then processes the data.
// data.map: Loops through the data array and logs each item's title.
// Function Call:

// processData(): Executes the function to fetch and process data.