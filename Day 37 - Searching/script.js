
// Question 1: Create a linearSearch function that searches for the value 99 in the given array: arr = [256, 32, 187, 56, 4, 99]

// Linear search function
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target value
        }
    }
    return -1; // Return -1 if the target value is not found
}

// Array to search in
const arr = [256, 32, 187, 56, 4, 99];

// Search for the value 99
const index = linearSearch(arr, 99);

if (index !== -1) {
    console.log(`Value 99 found at index ${index}.`);
} else {
    console.log('Value 99 not found in the array.');
}

// Explanation
// linearSearch Function:

// Takes two arguments: arr (the array to search) and target (the value to find).
// Iterates through the array using a for loop.
// Compares each element to the target value.
// Returns the index of the target value if found.
// Returns -1 if the target value is not found in the array.
// Array Definition:

// arr is defined with the values [256, 32, 187, 56, 4, 99].
// Function Call and Output:

// linearSearch(arr, 99) is called to search for the value 99 in the array.
// If the value is found, its index is logged; otherwise, a message indicating the value was not found is logged.

// ==================================
// Question 2: Create a binarySearch function that searches for the value 32 in the given array: arr = [4, 32, 56, 99, 187, 256]

// Binary search function
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Calculate the middle index
        
        if (arr[mid] === target) {
            return mid; // Return the index if the target is found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    
    return -1; // Return -1 if the target value is not found
}

// Array to search in
const arr = [4, 32, 56, 99, 187, 256];

// Search for the value 32
const index = binarySearch(arr, 32);

if (index !== -1) {
    console.log(`Value 32 found at index ${index}.`);
} else {
    console.log('Value 32 not found in the array.');
}

// Explanation
// binarySearch Function:

// Parameters: arr (the sorted array) and target (the value to search for).
// Initialization: left is set to the start of the array, and right is set to the end of the array.
// Loop: Continues while left is less than or equal to right.
// Middle Calculation: mid is computed as the middle index of the current range.
// Comparison:
// If arr[mid] equals target, return mid.
// If arr[mid] is less than target, adjust left to mid + 1 (search the right half).
// If arr[mid] is greater than target, adjust right to mid - 1 (search the left half).
// Not Found: If the loop completes without finding the target, return -1.
// Array Definition:

// arr is defined with the sorted values [4, 32, 56, 99, 187, 256].
// Function Call and Output:

// binarySearch(arr, 32) is called to search for the value 32.
// The index of the value is logged if found; otherwise, a message indicating the value was not found is logged.
