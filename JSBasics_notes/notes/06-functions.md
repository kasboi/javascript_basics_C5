# Functions

> **Topic**: Functions  
> **Concepts Covered**: Declarations, expressions, arrow functions, parameters, return values

## What are Functions?

A function is a reusable block of code designed to perform a specific task. Functions help organize code and avoid repetition.

### Basic Function Syntax

```javascript
function functionName(parameter1, parameter2) {
  // Code to be executed
  return value; // Optional
}
```

## Function Declarations

### Simple Function

```javascript
function greet_user(name, title = "Mr.", salutations) {
  console.log(`Welcome ${title} ${name} - ${salutations}`);
}

// Calling the function
greet_user("Ade", "Dr.", "Good morning");
greet_user("Bola", "Mrs", "Hello");
greet_user("Collins"); // Uses default title "Mr."
```

### Functions with Return Values

```javascript
function sum(a, b) {
  return a + b;
}

const result = sum(4, 5);
console.log(result); // 9

function square(num) {
  return num ** 2;
}

// You can use function results as arguments
const final_res = square(sum(4, 5)); // square(9) = 81
console.log(final_res);
```

### Complex Function Example

```javascript
function difference(num1, num2) {
  const diff = num2 - num1;
  return diff;
}

function absolute_difference(a, b) {
  let result;
  if (a > b) {
    result = a - b;
  } else {
    result = b - a;
  }
  return result;
}

console.log(absolute_difference(2, 8)); // 6
console.log(absolute_difference(8, 2)); // 6
```

## Parameters and Arguments

### Default Parameters

```javascript
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Hi")); // "Hi, Bob!"
```

### Multiple Parameters

```javascript
function currencyFormatter(num, currency = "₦") {
  let numStr = String(num);

  if (numStr.length <= 3) {
    return `${currency} ${num}`;
  }

  // Add commas for thousands
  let end_pointer = numStr.length;
  let start_pointer = numStr.length - 3;
  let sum = "";

  while (end_pointer) {
    sum = `,${numStr.slice(start_pointer, end_pointer)}` + sum;
    end_pointer = start_pointer;
    start_pointer -= 3;

    if (start_pointer <= 0) {
      sum = `${numStr.slice(0, end_pointer)}` + sum;
      break;
    }
  }

  return `${currency} ${sum}`;
}

console.log(currencyFormatter(100)); // "₦ 100"
console.log(currencyFormatter(25000, "GH₵")); // "GH₵ 25,000"
console.log(currencyFormatter(1000000, "£")); // "£ 1,000,000"
```

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions:

### Basic Arrow Function

```javascript
// Traditional function
function multiply(a, b) {
  return a * b;
}

// Arrow function (equivalent)
const multiply = (a, b) => {
  return a * b;
};

// Even shorter for single expressions
const multiply = (a, b) => a * b;
```

### Examples

```javascript
// Multi-line arrow function
const product = (a, b) => {
  const res = a * b;
  return res;
};

console.log(product(4, 8)); // 32

// Single-line arrow function
const division = (a, b) => a / b;

console.log(division(10, 2)); // 5

// Single parameter (parentheses optional)
const square = (num) => num ** 2;
console.log(square(5)); // 25

// No parameters
const getRandom = () => Math.random();
console.log(getRandom());
```

## Function Scope and Variables

Variables declared inside functions are local to that function:

```javascript
let globalVar = "I'm global";

function testScope() {
  let localVar = "I'm local";
  console.log(globalVar); // Can access global variables
  console.log(localVar); // Can access local variables
}

testScope();
// console.log(localVar); // Error! localVar is not defined outside the function
```

## Return Statement

### Functions without Return

```javascript
function sayHello(name) {
  console.log(`Hello, ${name}!`);
  // No return statement = returns undefined
}

const result = sayHello("Alice"); // Prints: "Hello, Alice!"
console.log(result); // undefined
```

### Early Return

```javascript
function checkAge(age) {
  if (age < 0) {
    return "Invalid age";
  }

  if (age < 18) {
    return "Minor";
  }

  return "Adult";
}

console.log(checkAge(-5)); // "Invalid age"
console.log(checkAge(15)); // "Minor"
console.log(checkAge(25)); // "Adult"
```

## Practical Examples

### Palindrome Checker

```javascript
function isPalindrome(str) {
  // Convert to lowercase and remove spaces
  const cleaned = str.toLowerCase().replace(/\s/g, "");

  // Reverse the string
  const reversed = cleaned.split("").reverse().join("");

  // Compare original with reversed
  return cleaned === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
```

### Calculator Functions

```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

function calculator(operation, a, b) {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operation";
  }
}

console.log(calculator("+", 5, 3)); // 8
console.log(calculator("/", 10, 2)); // 5
console.log(calculator("/", 10, 0)); // "Cannot divide by zero"
```

## Best Practices

1. **Use descriptive function names**: `calculateTotal()` vs `calc()`
2. **Keep functions small and focused**: One function, one purpose
3. **Use default parameters**: Provide sensible defaults
4. **Return early**: Avoid deep nesting with early returns
5. **Be consistent**: Choose either function declarations or expressions and stick with it
6. **Document complex functions**: Add comments explaining what the function does

## Function Declaration vs Expression vs Arrow

```javascript
// Function Declaration - hoisted, can be called before definition
function declared() {
  return "I'm declared";
}

// Function Expression - not hoisted
const expressed = function () {
  return "I'm expressed";
};

// Arrow Function - not hoisted, shorter syntax
const arrowed = () => "I'm arrowed";
```

## Common Pitfalls

1. **Forgetting to return a value** when you need one
2. **Modifying global variables** inside functions (use parameters instead)
3. **Not handling edge cases** (like division by zero)
4. **Functions that do too many things** (break them down)

## Key Takeaways

- Functions make code reusable and organized
- Use parameters to pass data into functions
- Use `return` to send data back from functions
- Arrow functions provide cleaner syntax for simple functions
- Keep functions focused on a single task
- Variables inside functions are local to that function

## Practice Exercises

1. Write a function that converts temperatures between Celsius and Fahrenheit
2. Create a function that finds the largest number in an array
3. Build a function that generates a random password
4. Write a function that counts the number of words in a sentence
5. Create a function that validates email addresses
