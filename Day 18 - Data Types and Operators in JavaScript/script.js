const students = {
    name: "Sarah",
    age: 39,
    city: "Nakuru"
};
for (let student in students){
    console.log(students[student]);

}
//Problem Statement:
//Q1. console.log which variable is holding the greater value using if statement where x = 10 and y = 20

const x = 10;
const y = 20;
if(x < y){
    console.log("Y is greater than X");
}

//Q2. Pass a value to the switch case and console.log the text where z = ‘one’.
const z = "one";
switch (z){
    case "one":
    console.log("Hello from case one...");
    break;
    case "two":
    console.log("Hello from case two...");
    break;
    default:
        console.log("No match for the value of z");
}

//Q3. Create two variables k = 1, sum = 0; use a while loop to add 10 to the sum on each iteration and console.log the sum value.

let sum = 0; // initialize sum to 0
let k = 1; // initialize k 

//use a while loop to add 10 to sum on each iteration
while (k <= 10){ // loop while k is <= 10
    sum +=10; // add 10 to the sum
    
    k++; //increment k to avoid infinite loop
}
console.log(sum); //output the final value of sum

// Explanation
// Initialization:

// k is initialized to 1 to control the number of iterations.
// sum is initialized to 0 as the starting value.
// While Loop:

// The loop runs as long as k is less than or equal to 10. This ensures the loop iterates exactly 10 times.
// On each iteration:
// sum is increased by 10 using sum += 10.
// k is incremented by 1 (k++) to eventually end the loop.
// Final Output:

// After the loop completes (after 10 iterations), sum will be 100.
// The console.log(sum) statement outputs the final value of sum, which is 100.
// By running this code, the sum variable increments by 10 in each iteration, and after 10 iterations, the sum reaches 100.

// Q4. Use a for loop to console.log any text five times.
for (let i = 0; i<5; i++){
    console.log("Welcome to Ongozy Technology Ltd.");
}

//Q5. Use a for of loop to console.log the order percentage using the given data.
const newObj = [
  {
    id: 1,
    order: "Below 500",
    "order percentage": "10.05",
    restaurant: "Punjabi Tadka",
  },
  {
    id: 2,
    order: "500-1000",
    "order percentage": "14.57",
    restaurant: "Punjabi Tadka",
  },
  {
    id: 3,
    order: "1000-1500",
    "order percentage": "15.08",
    restaurant: "Punjabi Tadka",
  },
  {
    id: 4,
    order: "1500-2000",
    "order percentage": "22.11",
    restaurant: "Punjabi Tadka",
  },
  {
    id: 5,
    order: "Above 2000",
    "order percentage": "38.19",
    restaurant: "Punjabi Tadka",
  },
];

for(let value of newObj){
    console.log(value["order percentage"]);
}