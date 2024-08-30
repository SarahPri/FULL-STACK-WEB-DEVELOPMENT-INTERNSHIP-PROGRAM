//An Array is an ordered collection of items that can be accessed by their index. Arrays can store elements of any type, including numbers, strings, objects, and other arrays.

//Creating an array wih different data types
const fruits = ["Banana", "Kiwi","Apple", "Date"];

//Accessing elements by index
console.log(fruits[0]);

//adding a new element to the end of the array
fruits.push("Mango")
console.log(fruits);

//removing the last element from the array
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

//Iterating over an array
fruits.forEach((fruit) =>{
    console.log(fruit);
})

//Object
//An Object is a collection of key-value pairs where each key (also called a property) is a string (or Symbol) and each value can be any type. Objects are used to store collections of data and more complex entities.
const person = {
    name:"Alice",
    age:30,
    job:"Engineer",
    greet:function(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} Years old.`);
    }
};

console.log(person.name); // Accessing property using dot notation
console.log(person["age"]); // Accessing property using bracket notation

//Adding new property to the object
person.email = "alice@gmail.com";
console.log(person.email);

// calling a method on the object
person.greet()

//Set
// A Set is a collection of unique values. A value in a Set can occur only once, which makes Sets useful for storing unique items. Sets are iterables and maintain insertion order. 