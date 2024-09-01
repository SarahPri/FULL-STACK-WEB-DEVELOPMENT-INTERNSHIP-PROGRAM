// Question 1: 
// Write a function that uses Promise.all to fetch data from three different URLs (you can use
// https://jsonplaceholder.typicode.com/posts/1, 
// https://jsonplaceholder.typicode.com/posts/2, 
// https://jsonplaceholder.typicode.com/posts/3 as test URLs
// ) and logs the combined data to the console.

function fetchDataFromUrls() {
    // Define the URLs to fetch data from
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ];

    // Map each URL to a fetch request which returns a promise
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));

    // Use Promise.all to run all fetch requests concurrently
    Promise.all(fetchPromises)
        .then(dataArray => {
            // Log the combined data to the console
            console.log(dataArray);
        })
        .catch(error => {
            // Log any errors that occur during the fetch or parsing process
            console.error('Error fetching data:', error);
        });
}

// Call the function to fetch data and log the results
fetchDataFromUrls();


// Explanation
// 1. Define URLs:

// . The urls array contains three URLs that point to different resources. These URLs are used as examples for fetching JSON data.
// 2. Create Fetch Promises:

// *. urls.map(url => fetch(url).then(response => response.json())):
// . This line creates an array of promises using Array.prototype.map().
// . For each URL in the urls array, a fetch request is made.
// . `fetch(url)` returns a promise that resolves to a Response object.
// .then(response => response.json()) converts the Response object to JSON format, which also returns a promise.

// 3. Use Promise.all:

// *. Promise.all(fetchPromises) takes an array of promises and returns a new promise that resolves when all of the promises in the array have resolved. If any promise is rejected, Promise.all immediately rejects with that error.
// .then(dataArray => { ... }):
// When all fetch requests complete successfully, Promise.all resolves with an array (dataArray) containing the JSON data from all URLs.
// The dataArray is logged to the console, showing the combined results from all fetch requests.

// 4. Error Handling:

// .catch(error => { ... }):
// This block catches any errors that occur during the fetch requests or while parsing the responses as JSON.
// The error message is logged to the console if an error is encountered.

// Question 2: Write a function that uses Promise.race with at least three promises that resolve after different delays. Log the result of the first promise to settle.

function racePromises() {
    // Create three promises with different delays
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 1 resolved after 500ms'), 500);
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 2 resolved after 100ms'), 100);
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 3 resolved after 300ms'), 300);
    });

    // Use Promise.race to get the first promise that resolves
    Promise.race([promise1, promise2, promise3])
        .then(result => {
            console.log(result);  // Logs the result of the first promise to settle
        })
        .catch(error => {
            console.error('An error occurred:', error);  // In case any promise rejects first
        });
}

// Call the function to execute the race
racePromises();


// Explanation
// Creating Promises with Different Delays:

// promise1: Resolves after 500 milliseconds with the message "Promise 1 resolved after 500ms".
// promise2: Resolves after 100 milliseconds with the message "Promise 2 resolved after 100ms".
// promise3: Resolves after 300 milliseconds with the message "Promise 3 resolved after 300ms".
// Using Promise.race:

// Promise.race([promise1, promise2, promise3]) starts all promises simultaneously and returns a new promise that resolves or rejects as soon as the first promise settles.
// In this case, the promise with the shortest delay (promise2 with 100 milliseconds) will settle first.
// Handling the Result:

// .then(result => { ... }): This block executes when the first promise settles (resolves in this case). It logs the result of the first settled promise to the console.
// .catch(error => { ... }): This block would execute if the first settled promise is rejected, logging an error to the console. However, in this example, all promises resolve.

// ====================================================
// Question 3: Similar to Question 2, but use Promise.any and include a promise that rejects quickly. Observe and log which promise's result is handled.

function anyPromises() {
    // Create three promises with different delays
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 1 resolved after 500ms'), 500);
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => reject('Promise 2 rejected after 100ms'), 100);  // This promise rejects quickly
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 3 resolved after 300ms'), 300);
    });

    // Use Promise.any to get the first promise that fulfills
    Promise.any([promise1, promise2, promise3])
        .then(result => {
            console.log(result);  // Logs the result of the first promise to fulfill
        })
        .catch(error => {
            console.error('All promises rejected:', error);
        });
}

// Call the function to execute Promise.any
anyPromises();



// Explanation
// Creating Promises with Different Delays:

// promise1: Resolves after 500 milliseconds with the message "Promise 1 resolved after 500ms".
// promise2: Rejects after 100 milliseconds with the message "Promise 2 rejected after 100ms". This is the promise that rejects quickly.
// promise3: Resolves after 300 milliseconds with the message "Promise 3 resolved after 300ms".
// Using Promise.any:

// Promise.any([promise1, promise2, promise3]) waits for the first promise to fulfill (resolve). It ignores the promises that reject.
// In this case, promise3 fulfills first (resolves after 300 milliseconds) because it has the shortest delay among the promises that do not reject.
// Handling the Result:

// .then(result => { ... }): This block executes when the first promise fulfills. It logs the result of the first fulfilled promise to the console.
// .catch(error => { ... }): This block would execute only if all promises reject. It logs an AggregateError if that happens. However, in this example, not all promises reject.

       