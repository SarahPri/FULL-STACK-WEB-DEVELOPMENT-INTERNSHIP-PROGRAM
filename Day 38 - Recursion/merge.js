// function mergeSort(arr, start, end) {
//     // Base case: If the array has one or no elements, it is already sorted
//     if (start >= end) {
//       return;
//     }
  
//     // Calculate the middle index to split the array
//     const mid = Math.floor((start + end) / 2);
  
//     // Recursively sort the first half
//     mergeSort(arr, start, mid);
  
//     // Recursively sort the second half
//     mergeSort(arr, mid + 1, end);
  
//     // Merge the sorted halves
//     merge(arr, start, mid, end);
//   }
  
//   function merge(arr, start, mid, end) {
//     // Create copies of the subarrays to merge
//     const leftArr = arr.slice(start, mid + 1);
//     const rightArr = arr.slice(mid + 1, end + 1);
  
//     let leftIndex = 0;  // Initial index of left subarray
//     let rightIndex = 0; // Initial index of right subarray
//     let mergedIndex = start; // Initial index of merged array
  
//     // Merge the left and right subarrays back into arr
//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//       if (leftArr[leftIndex] <= rightArr[rightIndex]) {
//         arr[mergedIndex] = leftArr[leftIndex];
//         leftIndex++;
//       } else {
//         arr[mergedIndex] = rightArr[rightIndex];
//         rightIndex++;
//       }
//       mergedIndex++;
//     }
  
//     // Copy any remaining elements of leftArr (if any)
//     while (leftIndex < leftArr.length) {
//       arr[mergedIndex] = leftArr[leftIndex];
//       leftIndex++;
//       mergedIndex++;
//     }
  
//     // Copy any remaining elements of rightArr (if any)
//     while (rightIndex < rightArr.length) {
//       arr[mergedIndex] = rightArr[rightIndex];
//       rightIndex++;
//       mergedIndex++;
//     }
//   }
  
//   // Example usage:
//   const arr = [6, 2, 5, 3, 9];
//   mergeSort(arr, 0, arr.length - 1);
//   console.log(arr); // Output: [2, 3, 5, 6, 9]


// Merge Sort
// var arr = [6,2,5,3,9];
// n = arr.length;
// function merge(arr, l, m, r){
//     var n1 = m - l + 1;
//     var n2 = r - m;
//     var L = new Array(n1);
//     var R = new Array(n2);

//     for(var i = 0; i <n1; i++){
//         L[i] = arr[l + i];
//     }
//     for (var j = 0; j<n2; j++){
//         R[j] = arr[m + 1 + j];
//     }

//     var j = 0;
//     var k = l;
//     for (var i = 0; i < n1 && j < n2;){
//         if(L[i] <= R[j]){
//             arr[k] = L[i];
//             i++;
//         }else{
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }

//     while (i < n1){
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
//     while (j < n2){
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }

// function mergeSort(arr, l, r){
//     if(l >= r){
//         return;
//     }
//     var m = l + parseInt((r-1)/2);
//     mergeSort(arr, l, m);
//     mergeSort(arr, m + 1, r);
//     mergeSort(arr, l, m, r)
// }
// console.log('Before sorting: ' + arr);
// // mergeSort(arr, 0, n-1);
// console.log('After Sorting ' + arr);

function mergeSort(array) {
    // If the array is of length 0 or 1, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Step 1: Find the middle index of the array
    const middleIndex = Math.floor(array.length / 2);

    // Step 2: Divide the array into two halves
    const leftHalf = array.slice(0, middleIndex); // First half of the array
    const rightHalf = array.slice(middleIndex);   // Second half of the array

    // Step 3: Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Step 4: Merge the sorted halves back together
    return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(leftArray, rightArray) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Step 5: Compare the elements of leftArray and rightArray, and merge them in sorted order
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            sortedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    // Step 6: Concatenate any remaining elements in leftArray or rightArray
    return sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

// Example usage
const arr = [6, 2, 5, 3, 9];
console.log('Before sorting:', arr);
const sortedArr = mergeSort(arr);
console.log('After sorting:', sortedArr);
