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
