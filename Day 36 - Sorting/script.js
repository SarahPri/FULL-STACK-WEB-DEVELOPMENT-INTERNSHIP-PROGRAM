// Question 1: Sort the given array arr = [26, 42, 78, 18, 3] using Bubble sort.


//Sorting
const arr = [26, 42, 78, 18, 3]
function bubbleSort(array){
    //Get the length of the array
    let n = array.length;

    //Outer loop to make sure we go through the array as many times as needed
    for(let i = 0; i<n-1; i++){
        //Inner loop to go through the array and compare adjacent items
        for(let j=0; j<n-1; j++){
            
        }
    }
}

// =============================
// Question 2. Sort the given array arr = [26, 42, 78, 18, 3] using Merge sort.
// Merge function to combine two sorted arrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays while there are elements in both
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concat the remaining elements (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Merge Sort function
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array of length 1 or empty is already sorted
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort each half and merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Given array
const arr = [26, 42, 78, 18, 3];

// Sort the array using merge sort
const sortedArr = mergeSort(arr);

// Output the sorted array
console.log(sortedArr);


// =========================================

// Explanation
// Merge Function:

// Combines two sorted arrays (left and right) into one sorted array.
// Uses two pointers (leftIndex and rightIndex) to traverse the left and right arrays.
// Compares elements and adds the smaller element to the result array.
// Concatenates any remaining elements from both arrays after the main loop.
// Merge Sort Function:

// Base Case: If the array length is 1 or less, it is already sorted.
// Recursive Case:
// Splits the array into two halves.
// Recursively sorts each half.
// Merges the sorted halves using the merge function.
// Sorting the Array:

// mergeSort(arr) is called with the given array [26, 42, 78, 18, 3].
// The sorted array is then logged to the console.