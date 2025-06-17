# Loops

> **Topic**: Control Flow (Extended)  
> **Concepts Covered**: `for`, `while`, `for...of`, `break`, `continue`

## Why Use Loops?

Loops allow us to repeat actions efficiently instead of writing repetitive code:

- Log numbers from 1 to 200
- Process every item in a list
- Keep asking for user input until valid
- Generate multiplication tables

## While Loops

The `while` loop executes code as long as a condition is true:

### Basic While Loop

```javascript
// Syntax
while (condition) {
  // Code to execute
  // Don't forget to update the condition!
}
```

### Examples

#### Simple Counter

```javascript
let count = 0;

while (count < 5) {
  console.log(`Number: ${count}`);
  count = count + 1; // or count++
}
// Output: Number: 0, Number: 1, Number: 2, Number: 3, Number: 4
```

#### Multiplication Table

```javascript
let multiplier = 1;

while (multiplier <= 12) {
  console.log(`4 x ${multiplier} = ${4 * multiplier}`);
  multiplier += 1;
}
```

#### Password Checker with Attempts

```javascript
const correct_password = "test123";
let input = prompt("Input your password");
let user_attempt = 0;

while (input !== correct_password) {
  user_attempt += 1;

  if (user_attempt === 3) {
    alert("Try again after 3 minutes");
    break; // Exit the loop
  }

  input = prompt("Wrong password, Input correct password");
}

if (input === correct_password) {
  alert("Correct password!!");
}
```

## For Loops

The `for` loop is used when you know how many times you want to repeat:

### Basic For Loop

```javascript
// Syntax
for (initial value; condition; increment/decrement) {
  // Code to execute
}
```

### Examples

#### Multiplication Table

```javascript
for (let i = 1; i <= 12; i++) {
  console.log(`6 x ${i} = ${6 * i}`);
}
```

#### Sum Calculator

```javascript
let input = +prompt("Input a number");
let sum = 0;

for (let i = 1; i <= input; i++) {
  sum += i;
}

console.log(`Sum from 1 to ${input} = ${sum}`);
```

#### Reverse Numbers

```javascript
let input = +prompt("Input a number");

for (let i = input; i > 0; i--) {
  console.log(i);
}
```

## For...Of Loop

The `for...of` loop is perfect for iterating through arrays:

```javascript
const arr = [2, 4, 6, 8, 10];

// Traditional for loop
for (let i = 0; i < arr.length; i++) {
  console.log(`2 x ${arr[i]} = ${2 * arr[i]}`);
}

// for...of loop (cleaner)
for (const element of arr) {
  console.log(`3 x ${element} = ${3 * element}`);
}
```

## Loop Control Statements

### Break

Exits the loop completely:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Exit when i equals 5
  }
  console.log(i);
}
// Output: 1, 2, 3, 4
```

### Continue

Skips the current iteration and continues with the next:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

## Common Loop Patterns

### Range Even Numbers

```javascript
let start = +prompt("Enter start number");
let end = +prompt("Enter end number");

let current = start;
while (current <= end) {
  if (current % 2 === 0) {
    console.log(current);
  }
  current++;
}
```

### FizzBuzz

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

## When to Use Which Loop

### Use `for` when:

- You know the exact number of iterations
- Working with counters or ranges
- Need the index value

### Use `while` when:

- The number of iterations is unknown
- Looping until a condition is met
- Processing user input until valid

### Use `for...of` when:

- Iterating through arrays or other iterables
- You need the values but not the indices
- Want cleaner, more readable code

## Common Pitfalls

### Infinite Loops

Always ensure your loop condition will eventually become false:

```javascript
// ❌ Infinite loop - counter never changes
let counter = 20;
while (counter > 0) {
  console.log(`Number: ${counter}`);
  // Missing: counter--;
}

// ✅ Fixed version
let counter = 20;
while (counter > 0) {
  console.log(`Number: ${counter}`);
  counter--; // or counter = counter - 1;
}
```

### Off-by-One Errors

Be careful with your loop conditions:

```javascript
// Common mistake - might miss the last element
for (let i = 0; i < array.length - 1; i++) {
  // This skips the last element!
}

// Correct version
for (let i = 0; i < array.length; i++) {
  // This processes all elements
}
```

## Best Practices

1. **Use meaningful variable names**: `i`, `j`, `k` for simple counters, descriptive names for complex loops
2. **Avoid modifying loop variables inside the loop body** (for `for` loops)
3. **Consider using `for...of` for arrays** instead of traditional `for` loops
4. **Always ensure the loop will terminate** to avoid infinite loops
5. **Use `break` and `continue` sparingly** and only when they make code clearer

## Key Takeaways

- `while` loops are condition-based, `for` loops are count-based
- `for...of` is the modern way to iterate through arrays
- Always ensure your loops will terminate
- Use `break` to exit early, `continue` to skip iterations
- Choose the right loop type for your specific use case

## Practice Exercises

1. Write a program that finds all prime numbers between 1 and 100
2. Create a guessing game where the user has limited attempts
3. Build a multiplication table generator for any number
4. Write a program that reverses a string using loops
5. Create a program that counts vowels in a sentence
