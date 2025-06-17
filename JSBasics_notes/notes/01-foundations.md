# JavaScript Foundations

> **Topic**: Foundations  
> **Concepts Covered**: Variables (`let`, `const`), data types, console, operators

## What is JavaScript?

JavaScript is a programming language primarily used for:

- Making web pages interactive
- Frontend development (running in the browser)
- Adding dynamic behavior to websites

## Console & Debugging

The `console.log()` function is your best friend for debugging and inspecting values:

```javascript
console.log("Hello, World!"); // Outputs: Hello, World!
console.log(42); // Outputs: 42
```

## Variables

Variables are containers for storing data. JavaScript has different ways to declare variables:

### Variable Declaration

```javascript
// Using let (can be reassigned)
let monthlyRent = 200;
console.log(monthlyRent); // 200

// Using const (cannot be reassigned)
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent); // 2400
```

### Variable Naming Rules

1. Names can contain letters, digits, `$`, and `_`
2. First character must not be a digit
3. Cannot use reserved keywords

```javascript
// ❌ Invalid
const 12cohort = "Hello techies";
let java-script = "programming language";

// ✅ Valid
const cohort12 = 'Hello techies';
let java_script = 'programming language';
const $another_one = 'yep, this is valid';
```

### Naming Conventions

```javascript
// snake_case
let first_name = "John";

// camelCase (preferred in JavaScript)
let monthlyRent = 200;
```

## Data Types

JavaScript has several basic data types:

### 1. Numbers

```javascript
const num1 = 100;
const num2 = 50;

// Arithmetic operators: +, -, *, /, **, %
console.log(num1 + num2); // 150
console.log(num1 - num2); // 50
console.log(2 ** 3); // 8 (exponentiation)
console.log(1 / 0); // Infinity
```

### 2. Strings

```javascript
const fName = "John"; // Double quotes
const middleName = "Lennon"; // Single quotes
const lName = `Wick`; // Backticks (template literals)

const sentence = "This is 'Adewale'"; // Mixing quotes
```

### 3. Booleans

```javascript
const newYear = true;
const isThis2024 = false;
```

### 4. Null

Represents "nothing", "empty" or "value unknown":

```javascript
const record = null;
```

### 5. Undefined

Represents "value is not assigned":

```javascript
let undefinedVariable; // automatically undefined
console.log(undefinedVariable); // undefined
```

### Checking Data Types

Use the `typeof` operator:

```javascript
console.log(typeof 2); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (this is a known quirk)
console.log(typeof undefined); // "undefined"
```

## Operators

### Arithmetic Operators

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `**` Exponentiation
- `%` Modulus (remainder)

### Assignment Operators

- `=` Assign
- `+=` Add and assign
- `-=` Subtract and assign
- `*=` Multiply and assign
- `/=` Divide and assign

## Browser Interactions

JavaScript can interact with users through browser dialogs:

### Alert

Displays a message to the user:

```javascript
alert("Welcome to the JavaScript course");
```

### Prompt

Gets input from the user:

```javascript
let age = prompt("How old are you?");
console.log(`Your age is`, age);
```

### Confirm

Gets a yes/no response from the user:

```javascript
let isOldEnough = confirm("Are you old enough to drive?");
console.log(isOldEnough); // true or false
```

## Comments

Comments help document your code:

```javascript
// Single line comment

/*
  Multi-line comment
  can span multiple lines
*/
```

## Key Takeaways

- Use `let` for variables that can change
- Use `const` for variables that won't change
- `console.log()` is essential for debugging
- JavaScript has dynamic typing (variables can hold different types)
- Always use meaningful variable names
- Comments make your code more readable

## Practice Exercises

1. Create two variables with numbers and log their sum, difference, product, and exponent
2. Experiment with dividing by zero and dividing strings by numbers
3. Create variables for your favorite food, color, and hobby, then use them in a sentence
