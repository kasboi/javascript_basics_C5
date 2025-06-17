# Foundations - Practice Exercises

> **Topic**: Foundations  
> **Concepts**: Variables, data types, console, operators

---

## 📝 Multiple Choice Questions

### Question 1

Which of the following is the correct way to declare a variable that can be reassigned?

- A) `const name = "John";`
- B) `let name = "John";`
- C) `var name = "John";`
- D) Both B and C

**Answer: D** - Both `let` and `var` can be reassigned, but `let` is preferred in modern JavaScript.

### Question 2

What will `console.log(typeof null)` output?

- A) "null"
- B) "undefined"
- C) "object"
- D) "boolean"

**Answer: C** - This is a known quirk in JavaScript where `typeof null` returns "object".

### Question 3

Which of these is NOT a valid variable name in JavaScript?

- A) `firstName`
- B) `$price`
- C) `2ndPlace`
- D) `_secret`

**Answer: C** - Variable names cannot start with a number.

### Question 4

What does `console.log(5 + "3")` output?

- A) 8
- B) "53"
- C) 53
- D) Error

**Answer: B** - JavaScript converts the number 5 to a string and concatenates it with "3".

### Question 5

Which data type is `NaN` (Not a Number)?

- A) string
- B) number
- C) undefined
- D) object

**Answer: B** - Despite its name, `NaN` is of type "number" in JavaScript.

---

## 💻 Practical Coding Exercises

### Exercise 1: Variable Practice

Create variables for a person's information and display them:

```javascript
// TODO: Create variables for:
// - firstName (string)
// - lastName (string)
// - age (number)
// - isStudent (boolean)
// - favoriteColor (string)

// TODO: Use console.log to display all information
// Expected output format: "John Doe, age 25, student: true, favorite color: blue"

// Your code here:
```

**Solution:**

```javascript
const firstName = "John";
const lastName = "Doe";
const age = 25;
const isStudent = true;
const favoriteColor = "blue";

console.log(
  `${firstName} ${lastName}, age ${age}, student: ${isStudent}, favorite color: ${favoriteColor}`,
);
```

### Exercise 2: Calculator

Create a simple calculator using basic operators:

```javascript
// TODO: Create two variables with numbers
// TODO: Calculate and log the following:
// - Sum
// - Difference
// - Product
// - Division
// - Remainder (modulus)
// - Exponentiation

// Your code here:
```

**Solution:**

```javascript
const num1 = 15;
const num2 = 4;

console.log("Sum:", num1 + num2); // 19
console.log("Difference:", num1 - num2); // 11
console.log("Product:", num1 * num2); // 60
console.log("Division:", num1 / num2); // 3.75
console.log("Remainder:", num1 % num2); // 3
console.log("Exponentiation:", num1 ** num2); // 50625
```

### Exercise 3: Data Type Explorer

Create variables of different types and explore them:

```javascript
// TODO: Create one variable of each type:
// - string, number, boolean, null, undefined

// TODO: Use typeof to check each variable's type
// TODO: Try some operations and see what happens

// Your code here:
```

**Solution:**

```javascript
const myString = "Hello World";
const myNumber = 42;
const myBoolean = true;
const myNull = null;
let myUndefined;

console.log("String:", myString, "Type:", typeof myString);
console.log("Number:", myNumber, "Type:", typeof myNumber);
console.log("Boolean:", myBoolean, "Type:", typeof myBoolean);
console.log("Null:", myNull, "Type:", typeof myNull);
console.log("Undefined:", myUndefined, "Type:", typeof myUndefined);

// Interesting operations
console.log("String + Number:", myString + myNumber);
console.log("Boolean + Number:", myBoolean + myNumber);
console.log("Null + Number:", myNull + myNumber);
```

---

## 🧪 JavaScript Tests

Run these in your browser console or Node.js:

### Test 1: Variable Declaration

```javascript
// Test: Can you declare variables correctly?
function testVariableDeclaration() {
  try {
    // Declare a constant
    const PI = 3.14159;

    // Declare a variable that can change
    let counter = 0;
    counter = 1;

    // This should not work (uncommenting should cause error)
    // PI = 3.14;

    console.log("✅ Variable declaration test passed");
    return true;
  } catch (error) {
    console.log("❌ Variable declaration test failed:", error.message);
    return false;
  }
}

testVariableDeclaration();
```

### Test 2: Type Checking

```javascript
// Test: Understanding JavaScript types
function testTypeUnderstanding() {
  const tests = [
    { value: "hello", expectedType: "string" },
    { value: 42, expectedType: "number" },
    { value: true, expectedType: "boolean" },
    { value: null, expectedType: "object" }, // This is the tricky one!
    { value: undefined, expectedType: "undefined" },
  ];

  let passed = 0;

  tests.forEach((test, index) => {
    const actualType = typeof test.value;
    if (actualType === test.expectedType) {
      console.log(`✅ Test ${index + 1}: ${test.value} is ${actualType}`);
      passed++;
    } else {
      console.log(
        `❌ Test ${index + 1}: Expected ${
          test.expectedType
        }, got ${actualType}`,
      );
    }
  });

  console.log(`\nResult: ${passed}/${tests.length} tests passed`);
  return passed === tests.length;
}

testTypeUnderstanding();
```

### Test 3: Arithmetic Operations

```javascript
// Test: Basic arithmetic understanding
function testArithmetic() {
  const questions = [
    { expression: "10 + 5", expected: 15 },
    { expression: "10 - 5", expected: 5 },
    { expression: "10 * 5", expected: 50 },
    { expression: "10 / 5", expected: 2 },
    { expression: "10 % 3", expected: 1 },
    { expression: "2 ** 3", expected: 8 },
  ];

  let correct = 0;

  questions.forEach((q, index) => {
    const result = eval(q.expression);
    if (result === q.expected) {
      console.log(`✅ Question ${index + 1}: ${q.expression} = ${result}`);
      correct++;
    } else {
      console.log(
        `❌ Question ${index + 1}: ${q.expression} = ${result}, expected ${
          q.expected
        }`,
      );
    }
  });

  console.log(`\nScore: ${correct}/${questions.length}`);
  return correct === questions.length;
}

testArithmetic();
```

---

## 🎯 Challenge Problems

### Challenge 1: Temperature Converter

Create a program that converts temperatures between Celsius and Fahrenheit:

```javascript
// TODO: Create variables for temperature conversion
// Formula: F = (C × 9/5) + 32
// Formula: C = (F - 32) × 5/9

// Test with: 0°C should be 32°F, 100°C should be 212°F

// Your code here:
```

### Challenge 2: Age Calculator

Calculate someone's age in different units:

```javascript
// TODO: Given a birth year, calculate:
// - Age in years
// - Age in months (approximate)
// - Age in days (approximate)
// - Age in hours (approximate)

const birthYear = 1995;
const currentYear = new Date().getFullYear();

// Your code here:
```

### Challenge 3: Grade Point Average

Calculate GPA from grade points:

```javascript
// TODO: Calculate GPA
// Given: subject grades as numbers (0-100)
// Convert to: 4.0 scale (90-100=4.0, 80-89=3.0, 70-79=2.0, 60-69=1.0, <60=0.0)

const grades = [95, 87, 92, 78, 85];

// Your code here:
```

---

## 🔍 Debugging Exercises

Find and fix the errors in these code snippets:

### Debug 1:

```javascript
// What's wrong with this code?
const userName = "Alice";
let userAge = 25;
const userLocation = "New York";

console.log(
  "User: " + userName + ", Age: " + userAge + ", Location: " + userLocation,
);

userName = "Bob"; // This line has an error
```

### Debug 2:

```javascript
// What's wrong with this code?
let price = 19.99;
let quantity = 3;
let total = price * quantity;

console.log("Total: $" + total.toFixed(2));

const 2ndPrice = 29.99; // This line has an error
```

### Debug 3:

```javascript
// What's wrong with this code?
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + lastName; // Missing something?

console.log(fullName);
```

---

## 📊 Self-Assessment Quiz

Rate your understanding (1-5 scale):

1. **Variable Declaration**: Can you correctly use `let`, `const`, and understand when to use each?
2. **Data Types**: Do you understand the 6 primitive types in JavaScript?
3. **Operators**: Can you use arithmetic, assignment, and other operators correctly?
4. **Type Checking**: Do you understand `typeof` and its quirks?
5. **Console**: Can you effectively use `console.log()` for debugging?

**Goal**: Aim for 4-5 in all areas before moving to the next topic.

---

## 💡 Tips for Practice

1. **Use Browser Console**: Practice these exercises in your browser's developer tools
2. **Experiment**: Try variations of the examples
3. **Break Things**: Intentionally make errors to see what happens
4. **Ask Questions**: If something doesn't make sense, research or ask for help
5. **Build Small Projects**: Apply these concepts in mini-projects

---

## 🎯 Next Steps

Once you're comfortable with foundations:

- Practice string manipulation and type conversion
- Move on to comparisons and logical operators
- Start building simple interactive programs

Remember: Mastery comes from practice! 🚀
