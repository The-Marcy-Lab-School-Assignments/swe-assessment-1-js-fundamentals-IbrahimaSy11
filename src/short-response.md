# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

The identifying error is with the variable currentStatus.currentStatus has been declared twice within the code using the let keyword. This error occurred because the person who wrote the code assumed that declaring the same variable with 'let' again would reassign it to a new value, which is not the case. This also causes a ReferenceError because currentStatus is only accessible inside the block where it is declared and cannot be used outside of it. My suggestion for fixing this is to remove the second 'let' keyword inside the 'else' statement and declare 'currentStatus' once outside the 'if' statement.

### Question 2

The following code will log:
Michael Jordan

This happens because we assigned the object reference stored in bestPlayer to theGOAT.
When we change the name property on bestPlayer, it also affects theGOAT since both variables reference the same object in memory.

Declare a variable and assign an object with a property 'name' and a string value
let bestPlayer = { name: "Lebron James" };

Reassign the variable to a new variable 'theGOAT'
let theGOAT = bestPlayer;

bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);

### Question 3

The following code will log:
Paul is the hardest-working person in the room.
Laisha is also the hardest-working person in the room.

This happens because the variable theHustler inside the function has block scope, so it does not affect the value of theHustler outside the function.

Declare a const variable and assign the value 'Laisha'
const theHustler = 'Laisha';

// Create a function named shoutOut
const shoutOut = () => {
// Declare a new variable with the same name inside the function
const theHustler = 'Paul';
console.log(`${theHustler} is the hardest-working person in the room.`);
};

shoutOut();
console.log(`${theHustler} is also the hardest-working person in the room.`);

### Question 4

The rest parameter allows a function to accept an indefinite number of arguments as an array.
Its purpose is to make functions more flexible by grouping remaining arguments into a single array.
Example:
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

In this example, ...numbers collects all the arguments passed to the function and stores them in an array.

### Question 5

A scope is a set of rules that represent where in your code a variable or function is accessible.

You can think of scope like a house with many rooms, where variables are like items inside those rooms. To access an item, you need the correct key to open the door to the room it's in

// A variable in the global "house" scope
const house = "kitchen";

function room() {
// A variable in the local "room" scope
const room = "bedroom";

// This can access both 'house' and 'room'
console.log(`Inside the function, I can see the ${house} and the ${room}.`);
}

room(); // Calls the function

// Outside the function, 'room' is not accessible. console.log(`Outside the function, I can only see the ${house}.`);

### Question 6

A module is a separate file that holds some code, like functions, variables, or classes, so you can use it in other files.
Think of a module like a toolbox: you put tools (meaning code) inside it and then use those tools anywhere you need.
Why Use Modules
It keeps your code organized and clean.
You can reuse the same code in different files.
If something breaks, you only fix it in one place.
It allows many people to work on different modules without getting in each other’s way.

Example:

math.js
// This function adds two numbers
function add(a, b) {
return a + b;
}
// Export the function so other files can use it
module.exports = add;

// Import the add function from math.js
const add = require('./math');
// Use the imported function
console.log(add(5, 3)); // Output: 8

### Question 7

fruits will still be ['apple', 'banana', 'cherry', 'date']
(because the original array was not changed).
fruitsMinusOne will be ['apple', 'banana', 'cherry']
(because the function returned a new array without the last element).

const arrCopy = [...arr];
We make a copy so that when we use pop(), it removes the last element from the copy, not the original array.
This is what makes the function pure; it does not change data that was given to it.
A pure function is easier to test and reuse.
If we mutate the input, other parts of the program might break because they depend on that original data.
Keeping it pure means
No side effects
Safer and more predictable code
Easier to debug

### Question 8

An object is suitable for a single item because it can store multiple details, such as name, price, and quantity.
const item = {
name: 'Laptop',
price: 1000,
quantity: 1
};
An array is best because a cart typically holds multiple items, and an array can store a large number of objects.
const shoppingCart = [
{ name: 'Laptop', price: 1000, quantity: 1 },
{ name: 'Headphones', price: 200, quantity: 2 },
{ name: 'Mouse', price: 50, quantity: 1 }
];
Objects store details for each item.
Arrays let us loop through all the items in the cart
It's easy to add, remove, or update items.

let total = 0;
for (const item of shoppingCart) {
total += item.price \* item.quantity;
}
console.log(total); // 1450
