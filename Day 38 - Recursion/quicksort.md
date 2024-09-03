function quickSort(array) {
    // Base case: if the array is of length 0 or 1, it's already sorted
    if (array.length <= 1) {
        return array;
    }

    // Step 1: Choose a pivot element
    const pivot = array[array.length - 1]; // Use the last element as the pivot
    const leftArray = [];  // Array to hold elements less than the pivot
    const rightArray = []; // Array to hold elements greater than the pivot

    // Step 2: Partition the array into left and right arrays
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);  // Elements less than pivot go to leftArray
        } else {
            rightArray.push(array[i]); // Elements greater than pivot go to rightArray
        }
    }

    // Step 3: Recursively apply quickSort to left and right arrays and concatenate the results
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// Example usage
const arr = [6, 2, 5, 3, 9];
console.log('Before sorting:', arr);
const sortedArr = quickSort(arr);
console.log('After sorting:', sortedArr);


// Example usage
// const arr = [6, 2, 5, 3, 9];
// console.log('Before sorting:', arr);
// const sortedArr = quickSort(arr);
// console.log('After sorting:', sortedArr);

// Explanation of Quick Sort in Layman's Terms
// Choose a Pivot:

// Select an element from the array to act as a "pivot". This pivot can be any element, but for simplicity, we often use the last element of the array.
// Partition the Array:

// Rearrange the array so that all elements less than the pivot come before it, and all elements greater than the pivot come after it. The pivot will be in its final sorted position after this step.
// Recursively Apply:

// Apply the same process to the subarrays formed on either side of the pivot. Continue this process until the entire array is sorted.
// Beginner-Friendly Code for Quick Sort


// Detailed Explanation of the Code
// quickSort Function:

// Base Case: If the array has 0 or 1 element, it's already sorted, so we return it.
// Choose a Pivot: We choose the last element of the array as the pivot.
// Partitioning:
// We create two new arrays, leftArray and rightArray.
// We loop through the array (except the last element, which is the pivot).
// If the current element is less than the pivot, we add it to leftArray.
// If the current element is greater than or equal to the pivot, we add it to rightArray.
// Recursive Sorting:
// We recursively call quickSort on both leftArray and rightArray.
// We then concatenate the sorted leftArray, the pivot, and the sorted rightArray to get the final sorted array.
// Example Usage:

// Before Sorting: The array [6, 2, 5, 3, 9] is printed.
// After Sorting: The sorted array [2, 3, 5, 6, 9] is printed.
// Why is Quick Sort Efficient?
// Partitioning: This is the key step in Quick Sort. By placing the pivot in its correct sorted position, it divides the array into two halves, ensuring that elements are only compared once.
// Recursion: Quick Sort uses recursion to sort the left and right subarrays separately, which simplifies the sorting process.
// In-Place Sorting: Although the example code uses additional arrays (leftArray and rightArray) for clarity, Quick Sort can be implemented in place, meaning it doesn't require additional memory beyond the initial array.
// This beginner-friendly version of Quick Sort is easier to understand by breaking down each step and using additional arrays for clarity.
