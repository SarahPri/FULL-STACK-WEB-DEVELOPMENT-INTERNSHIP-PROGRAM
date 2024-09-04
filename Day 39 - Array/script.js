let arr = [2,3,6,2,5];

// function unshiftFn(arr, ele){
//     for(let i=arr.length; i>=0; i--)
// }

function popFn(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        newArr[i] = arr[i];
    }
    newArr.pop(); // Remove the last element from newArr
    return newArr; // Return the modified array
}

// const arr = [1, 2, 3, 4, 5];
console.log(popFn(arr)); // Output: [1, 2, 3, 4]


function shiftFn(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        newArr[i] = arr[i];
    }
    newArr.shift(); // Remove the first element from newArr
    return newArr; // Return the modified array
}

// const arr = [1, 2, 3, 4, 5];
console.log(shiftFn(arr)); // Output: [2, 3, 4, 5]


// for each
// let fruits = ["orange", "mango", "apple", "guava"]
// function forEach(array, callback){
//     for(var i = 0; i<array.length; i++){
//         callback(array[i], i, array)
//     }
// }

// forEach(fruits, (item, index) => {
//     console.log(`${index + 1}. ${item}`);
// })

// forEach(fruits, (item, index) => {
//     console.log(`${index + 1}. ${item}`);
// })

// map
// let fruits = ["orange", "mango", "apple", "guava"]
// function map(array, callback){
//     var returnValue = [];
//     for(var i = 0; i<array.length; i++){
//        var newArr = callback(array[i], i, array);
//        returnValue.push(newValue);
//     }
//     return returnValue;
// }


// var values = map(fruits, (item, index) => {
//     return item
// })
// console.log(values);


//=============
// let filterFn = ["orange", "mango", "apple", "guava"]
// function map(array, callback){
//     var returnValue = [];
//     for(var i = 0; i<array.length; i++){
//        var newArr = callback(array[i], i, array);
//        returnValue.push(newValue);
//     }
//     return returnValue;
// }


// var values = map(fruits, (item, index) => {
//     return item
// })
// console.log(values);


// 
function concatFn(...arr){
    let res=[];
    for(item of arr){
        res += item
        // res.push(i)
    }
    return res;
}
console.log(concatFn([5,6,7],[1,2,43]));