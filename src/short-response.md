# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

---

### **Question 1**

The identifying error is with the variable `currentStatus`. `currentStatus` has been declared twice within the code using the `let` keyword. This error occurred because the person who wrote the code assumed that declaring the same variable with `let` again would reassign it, which is not the case.

It also causes a **ReferenceError** because `currentStatus` is only accessible inside the block where it is declared.

**Fix:** remove the second `let` keyword inside the `else` statement and declare `currentStatus` once outside the `if` statement.

---

### **Question 2**

The following code will log:

```
Michael Jordan
```

This happens because we assigned the object reference stored in `bestPlayer` to `theGOAT`.
When we change the `name` property on `bestPlayer`, it also affects `theGOAT` since both variables reference the same object in memory.

```js
// Declare a variable and assign an object
let bestPlayer = { name: "Lebron James" };

// Reassign the variable to a new variable
let theGOAT = bestPlayer;

bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);
```

---

### **Question 3**

The following code will log:

```
Paul is the hardest-working person in the room.
Laisha is also the hardest-working person in the room.
```

This happens because the variable `theHustler` inside the function has block scope, so it does not affect the value of `theHustler` outside the function.

```js
// Declare a const variable and assign the value 'Laisha'
const theHustler = "Laisha";

// Create a function named shoutOut
const shoutOut = () => {
  // Declare a new variable with the same name inside the function
  const theHustler = "Paul";
  console.log(`${theHustler} is the hardest-working person in the room.`);
};

shoutOut();
console.log(`${theHustler} is also the hardest-working person in the room.`);
```

---

### **Question 4**

The rest parameter allows a function to accept an indefinite number of arguments as an array.
Its purpose is to make functions more flexible by grouping remaining arguments into a single array.

Example:

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

In this example, `...numbers` collects all the arguments passed to the function and stores them in an array.

---

### **Question 5**

A scope is a set of rules that represent where in your code a variable or function is accessible.

You can think of scope like a house with many rooms, where variables are like items inside those rooms. To access an item, you need the correct key to open the door.

```js
// A variable in the global "house" scope
const house = "kitchen";

function room() {
  // A variable in the local "room" scope
  const room = "bedroom";

  // This can access both 'house' and 'room'
  console.log(`Inside the function, I can see the ${house} and the ${room}.`);
}

room();

// Outside the function, 'room' is not accessible.
// console.log(`Outside the function, I can only see the ${house}.`);
```

---

### **Question 6**

A module is a separate file that holds some code, like functions, variables, or classes, so you can use it in other files.

Think of a module like a toolbox: you put tools (code) inside it and use those tools anywhere you need.

**Why use modules?**

- Keeps code organized
- Reusable across projects
- Easier to maintain
- Multiple people can work without conflicts

Example:

**math.js**

```js
function add(a, b) {
  return a + b;
}

// Export the function
module.exports = add;
```

**main file**

```js
// Import the add function
const add = require("./math");

console.log(add(5, 3)); // Output: 8
```

---

### **Question 7**

- `fruits` will still be:
  `['apple', 'banana', 'cherry', 'date']`
  because the original array was not changed.

- `fruitsMinusOne` will be:
  `['apple', 'banana', 'cherry']`
  because the function returned a new array without the last element.

`const arrCopy = [...arr];`
We make a copy so that when we use `pop()`, it removes the last element from the **copy**, not the original array.

This makes the function **pure**.

**Why pure functions matter:**

- No side effects
- More predictable
- Less error-prone
- Easy to test and reuse

---

### **Question 8**

An **object** is suitable for a single item because it can store multiple details:

```js
const item = {
  name: "Laptop",
  price: 1000,
  quantity: 1,
};
```

An **array** is best for a cart because it holds multiple items:

```js
const shoppingCart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Headphones", price: 200, quantity: 2 },
  { name: "Mouse", price: 50, quantity: 1 },
];
```

Objects store item details.
Arrays allow looping through many items and make adding/removing items easier.

```js
let total = 0;
for (const item of shoppingCart) {
  total += item.price * item.quantity;
}
console.log(total); // 1450
```

---
