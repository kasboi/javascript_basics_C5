# Control Flow

> **Topic**: Control Flow  
> **Concepts Covered**: `if`, `else`, `switch`, conditional statements

## Conditional Statements

Control statements allow your program to make decisions and execute different code based on conditions.

### Basic If Statement

```javascript
// Basic syntax
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false (optional)
}
```

### Examples

#### Even or Odd Checker

```javascript
let val = Number(prompt("Input a number"));
if (val % 2 === 0) {
  alert("Yep, that's an even number");
} else {
  alert("Nope, it is an odd number");
}
```

#### Age Eligibility Check

```javascript
const age = Number(prompt("What is your age?"));
if (age >= 18) {
  alert("Congratulations, you are eligible for a driver's license.");
} else {
  alert(`${age} is not eligible for a driver's license`);
}
```

### If-Else If-Else Chain

For multiple conditions:

```javascript
const score = +prompt("Input your score"); // + converts to number

if (score >= 70) {
  console.log("A"); // Grade A for 70+
} else if (score >= 60) {
  console.log("B"); // Grade B for 60-69
} else if (score >= 50) {
  console.log("C"); // Grade C for 50-59
} else {
  console.log("F"); // Grade F for below 50
}
```

### Truthy/Falsy Conditions

You can use any value as a condition:

```javascript
const skyIsBlue = "yes"; // Truthy value
if (skyIsBlue) {
  alert("As expected"); // Executes because "yes" is truthy
} else {
  alert("Nope!"); // Won't execute
}
```

## Switch Statement

Use `switch` when comparing a single value against multiple possibilities:

### Basic Switch

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Wednesday":
    console.log("Midweek already!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("Just another day");
    break;
}
```

### Multiple Cases

Group cases that should execute the same code:

```javascript
let month = "February";

switch (month) {
  case "January":
  case "February":
  case "March":
    console.log("First quarter of the business year");
    break;

  case "April":
  case "May":
  case "June":
    console.log("Second quarter of the business year");
    break;

  case "July":
  case "August":
  case "September":
    console.log("Third quarter of the business year");
    break;

  case "October":
  case "November":
  case "December":
    console.log("Fourth quarter of the business year");
    break;

  default:
    console.log("Invalid month");
    break;
}
```

### Important Switch Notes

- Always use `break` to prevent fall-through
- Use `default` for cases not explicitly handled
- Switch uses strict equality (`===`) for comparison

## Ternary Operator

A shorthand for simple if-else statements:

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse

const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Equivalent if-else:
let status2;
if (age >= 18) {
  status2 = "adult";
} else {
  status2 = "minor";
}
```

## Real-World Examples

### Discount Calculator

```javascript
const price = +prompt("Input total amount");

if (price < 50) {
  console.log("No discount");
} else if (price >= 50 && price <= 100) {
  let total_amount = price - 0.1 * price; // 10% discount
  console.log(`Total amount: ${total_amount}`);
} else {
  let total_amount = price - 0.2 * price; // 20% discount
  console.log(`Total amount: ${total_amount}`);
}
```

### Vowel Checker

```javascript
const letter = prompt("Input alphabet letter").toLowerCase();

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    alert("That is a vowel character");
    break;
  default:
    alert("That is a consonant letter");
    break;
}
```

## Best Practices

1. **Use meaningful conditions**: Make your conditions clear and readable
2. **Avoid deep nesting**: Too many nested if statements become hard to read
3. **Use switch for multiple equality checks**: When comparing one variable to many values
4. **Always include `break` in switch**: Unless you intentionally want fall-through
5. **Consider ternary for simple cases**: But don't overuse it for complex logic

## Common Pitfalls

1. **Assignment vs Comparison**: Use `===` not `=` in conditions
2. **Missing breaks in switch**: Can cause unexpected fall-through
3. **Truthy/Falsy confusion**: Remember that `0`, `""`, `null`, `undefined` are falsy

## Key Takeaways

- Use `if-else` for true/false conditions
- Use `switch` when comparing one value against multiple possibilities
- Always use strict equality (`===`) in conditions
- Remember the difference between truthy and falsy values
- Keep conditions simple and readable

## Practice Exercises

1. Create a grade calculator that converts numeric scores to letter grades
2. Build a simple calculator that performs operations based on user input
3. Write a program that determines the season based on the month
4. Create a BMI calculator with health category classification
