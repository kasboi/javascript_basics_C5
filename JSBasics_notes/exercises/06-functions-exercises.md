# Topic 6: Functions - Exercises

## Multiple Choice Questions

### Question 1

What is the correct syntax for a function declaration?
A) `function = myFunction() {}`
B) `function myFunction() {}`
C) `myFunction() = function {}`
D) `function: myFunction() {}`

**Answer: B**
**Explanation:** Function declarations use the `function` keyword followed by the function name and parentheses.

### Question 2

What will this function return?

```javascript
function add(a, b) {
  a + b;
}
```

A) The sum of a and b
B) `undefined`
C) `null`
D) Error

**Answer: B**
**Explanation:** Without a `return` statement, functions return `undefined` by default.

### Question 3

What's the difference between function declarations and function expressions?
A) No difference
B) Declarations are hoisted, expressions are not
C) Expressions are hoisted, declarations are not
D) Only syntax is different

**Answer: B**
**Explanation:** Function declarations are hoisted to the top of their scope, while function expressions are not.

### Question 4

What will this arrow function return?

```javascript
const multiply = (x, y) => x * y;
```

A) `undefined`
B) The product of x and y
C) `null`
D) Error

**Answer: B**
**Explanation:** Arrow functions with a single expression automatically return that expression's value.

### Question 5

How do you provide a default parameter value?
A) `function test(param = defaultValue)`
B) `function test(param || defaultValue)`
C) `function test(param: defaultValue)`
D) `function test(param, defaultValue)`

**Answer: A**
**Explanation:** ES6 default parameters use the `=` syntax in the parameter list.

### Question 6

What happens when you call a function with fewer arguments than parameters?
A) Error
B) Missing parameters are `undefined`
C) Missing parameters are `null`
D) Function doesn't execute

**Answer: B**
**Explanation:** Missing arguments result in `undefined` values for those parameters.

## Practical Coding Exercises

### Exercise 1: Basic Function Creation

Create a function that greets a person by name.

```javascript
function greetPerson(name) {
  // Return a greeting message
}

// Test your function
console.log(greetPerson("Alice")); // "Hello, Alice!"
console.log(greetPerson("Bob")); // "Hello, Bob!"
```

**Solution:**

```javascript
function greetPerson(name) {
  return `Hello, ${name}!`;
}
```

### Exercise 2: Function with Multiple Parameters

Write a function that calculates the area of a rectangle.

```javascript
function calculateRectangleArea(length, width) {
  // Return the area of the rectangle
}

// Test your function
console.log(calculateRectangleArea(5, 3)); // 15
console.log(calculateRectangleArea(10, 2)); // 20
```

**Solution:**

```javascript
function calculateRectangleArea(length, width) {
  return length * width;
}
```

### Exercise 3: Function with Default Parameters

Create a function that calculates compound interest with default values.

```javascript
function calculateInterest(principal, rate = 0.05, time = 1) {
  // Calculate compound interest: A = P(1 + r)^t
  // Return the final amount
}

// Test your function
console.log(calculateInterest(1000)); // Using default rate and time
console.log(calculateInterest(1000, 0.08)); // Using default time
console.log(calculateInterest(1000, 0.08, 2)); // All parameters provided
```

**Solution:**

```javascript
function calculateInterest(principal, rate = 0.05, time = 1) {
  return principal * Math.pow(1 + rate, time);
}
```

### Exercise 4: Arrow Function Practice

Convert these function declarations to arrow functions:

```javascript
// Convert this function declaration
function square(x) {
  return x * x;
}

// Convert this function declaration
function isEven(number) {
  return number % 2 === 0;
}

// Convert this function declaration
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
```

**Solutions:**

```javascript
const square = (x) => x * x;
// or even shorter: const square = x => x * x;

const isEven = (number) => number % 2 === 0;

const getFullName = (firstName, lastName) => firstName + " " + lastName;
```

### Exercise 5: Function Expression

Write a function expression that finds the maximum of three numbers.

```javascript
const findMax = // Your function expression here
  // Test your function
  console.log(findMax(10, 5, 8)); // 10
console.log(findMax(1, 9, 3)); // 9
console.log(findMax(7, 7, 7)); // 7
```

**Solution:**

```javascript
const findMax = function (a, b, c) {
  return Math.max(a, b, c);
};

// Alternative without Math.max:
const findMax = function (a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
};
```

### Exercise 6: Return vs No Return

Create two functions to demonstrate the difference:

```javascript
function printMessage(message) {
  // This function should print the message but not return anything
}

function formatMessage(message) {
  // This function should return a formatted message
}

// Test both functions
printMessage("Hello World"); // Prints to console
const formatted = formatMessage("Hello World"); // Returns formatted string
console.log(formatted);
```

**Solutions:**

```javascript
function printMessage(message) {
  console.log(`Message: ${message}`);
  // No return statement - returns undefined
}

function formatMessage(message) {
  return `*** ${message} ***`;
}
```

## JavaScript Test Functions

```javascript
// Test function for function exercises
function testFunctionExercises() {
  console.log("=== Testing Function Exercises ===");

  // Test greetPerson
  const test1 = greetPerson("Alice") === "Hello, Alice!";
  console.log("greetPerson test:", test1 ? "PASS" : "FAIL");

  // Test calculateRectangleArea
  const test2 = calculateRectangleArea(5, 3) === 15;
  console.log("calculateRectangleArea test:", test2 ? "PASS" : "FAIL");

  // Test calculateInterest with defaults
  const result1 = calculateInterest(1000);
  const test3 = Math.abs(result1 - 1050) < 0.01; // Using small tolerance for floating point
  console.log("calculateInterest test:", test3 ? "PASS" : "FAIL");

  // Test arrow functions
  const test4 = square(4) === 16;
  const test5 = isEven(4) === true && isEven(5) === false;
  console.log("Arrow functions test:", test4 && test5 ? "PASS" : "FAIL");

  // Test findMax
  const test6 = findMax(10, 5, 8) === 10;
  console.log("findMax test:", test6 ? "PASS" : "FAIL");

  // Test formatMessage
  const test7 = formatMessage("Hello") === "*** Hello ***";
  console.log("formatMessage test:", test7 ? "PASS" : "FAIL");
}

// Run tests
testFunctionExercises();
```

## Challenge Problems

### Challenge 1: Higher-Order Functions

Create a function that takes another function as a parameter.

```javascript
function applyOperation(numbers, operation) {
  // Apply the operation function to each number in the array
  // Return a new array with the results
}

// Example operations
function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

// Test your function
console.log(applyOperation([1, 2, 3, 4], double)); // [2, 4, 6, 8]
console.log(applyOperation([1, 2, 3, 4], square)); // [1, 4, 9, 16]
```

**Solution:**

```javascript
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}
```

### Challenge 2: Function Factory

Create a function that returns other functions.

```javascript
function createMultiplier(factor) {
  // Return a function that multiplies its input by factor
}

// Test your function factory
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
```

**Solution:**

```javascript
function createMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

// Arrow function version:
const createMultiplier = (factor) => (x) => x * factor;
```

### Challenge 3: Recursive Function

Write a recursive function to calculate factorial.

```javascript
function factorial(n) {
  // Calculate n! using recursion
  // Remember: 0! = 1, n! = n * (n-1)!
}

// Test your function
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(3)); // 6
```

**Solution:**

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

### Challenge 4: Function Composition

Create a function that composes two functions.

```javascript
function compose(f, g) {
  // Return a function that applies g first, then f
  // compose(f, g)(x) should equal f(g(x))
}

// Example functions
const addOne = (x) => x + 1;
const double = (x) => x * 2;

// Test composition
const addThenDouble = compose(double, addOne);
console.log(addThenDouble(3)); // double(addOne(3)) = double(4) = 8
```

**Solution:**

```javascript
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

// Arrow function version:
const compose = (f, g) => (x) => f(g(x));
```

### Challenge 5: Partial Application

Create a function that allows partial application.

```javascript
function partial(func, ...fixedArgs) {
  // Return a function that accepts remaining arguments
}

// Example usage
function add(a, b, c) {
  return a + b + c;
}

const addFive = partial(add, 5);
const addFiveAndTwo = partial(add, 5, 2);

console.log(addFive(2, 3)); // add(5, 2, 3) = 10
console.log(addFiveAndTwo(1)); // add(5, 2, 1) = 8
```

**Solution:**

```javascript
function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}
```

## Debugging Exercises

### Debug Exercise 1

Fix the function that's not returning a value:

```javascript
function calculateDiscount(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  const finalPrice = price - discount;
  // Missing return statement
}

console.log(calculateDiscount(100, 20)); // Should return 80, but returns undefined
```

**Fix:**

```javascript
function calculateDiscount(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  const finalPrice = price - discount;
  return finalPrice;
}
```

### Debug Exercise 2

Fix the arrow function syntax error:

```javascript
const calculateArea = (radius) => {
  const area = Math.PI * radius * radius;
  area; // Missing return in block syntax
};
```

**Fix:**

```javascript
const calculateArea = (radius) => {
  const area = Math.PI * radius * radius;
  return area;
};

// Or use implicit return:
const calculateArea = (radius) => Math.PI * radius * radius;
```

### Debug Exercise 3

Fix the parameter handling issue:

```javascript
function greetUser(name, greeting) {
  return greeting + ", " + name + "!";
}

console.log(greetUser("Alice")); // Should provide default greeting
```

**Fix:**

```javascript
function greetUser(name, greeting = "Hello") {
  return greeting + ", " + name + "!";
}
```

## Real-World Applications

### Application 1: Validation Functions

Create reusable validation functions for forms.

```javascript
function validateEmail(email) {
  // Basic email validation
  return email.includes("@") && email.includes(".");
}

function validatePassword(password) {
  // Password must be at least 8 characters
  return password.length >= 8;
}

function validateForm(formData) {
  const { email, password, confirmPassword } = formData;

  const errors = [];

  if (!validateEmail(email)) {
    errors.push("Invalid email format");
  }

  if (!validatePassword(password)) {
    errors.push("Password must be at least 8 characters");
  }

  if (password !== confirmPassword) {
    errors.push("Passwords don't match");
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}
```

### Application 2: Utility Functions Library

Create a collection of useful utility functions.

```javascript
// Math utilities
const mathUtils = {
  clamp: (value, min, max) => Math.min(Math.max(value, min), max),
  lerp: (start, end, t) => start + (end - start) * t,
  randomBetween: (min, max) => Math.random() * (max - min) + min,
  roundToDecimal: (number, decimals) => Number(number.toFixed(decimals)),
};

// String utilities
const stringUtils = {
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  slugify: (str) => str.toLowerCase().replace(/\s+/g, "-"),
  truncate: (str, length) =>
    str.length > length ? str.slice(0, length) + "..." : str,
};

// Array utilities
const arrayUtils = {
  chunk: (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  },
  unique: (array) => [...new Set(array)],
  groupBy: (array, key) => {
    return array.reduce((groups, item) => {
      const group = item[key];
      groups[group] = groups[group] || [];
      groups[group].push(item);
      return groups;
    }, {});
  },
};
```

### Application 3: Event Handler Functions

Create functions for handling user interactions.

```javascript
function createClickHandler(buttonId, action) {
  return function () {
    console.log(`Button ${buttonId} clicked`);
    action();
  };
}

function createFormSubmitHandler(validationRules) {
  return function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const validation = validateForm(data, validationRules);

    if (validation.isValid) {
      console.log("Form submitted successfully", data);
    } else {
      console.log("Validation errors:", validation.errors);
    }
  };
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const debouncedSearch = debounce(function (query) {
  console.log("Searching for:", query);
}, 300);
```

## Function Best Practices

### Exercise: Refactoring Functions

Refactor this code to follow best practices:

```javascript
// Bad example - refactor this
function doStuff(x, y, z) {
  let result;
  if (x > 0) {
    if (y > 0) {
      if (z > 0) {
        result = x + y + z;
      } else {
        result = x + y;
      }
    } else {
      result = x;
    }
  } else {
    result = 0;
  }
  return result;
}

// Refactor to:
// 1. Use better function name
// 2. Add input validation
// 3. Simplify logic
// 4. Add comments
```

**Refactored Solution:**

```javascript
/**
 * Calculates the sum of positive numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {number} c - Third number
 * @returns {number} Sum of positive numbers
 */
function sumPositiveNumbers(a, b, c) {
  // Validate inputs
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    throw new Error("All parameters must be numbers");
  }

  // Sum only positive numbers
  let sum = 0;
  if (a > 0) sum += a;
  if (b > 0) sum += b;
  if (c > 0) sum += c;

  return sum;
}
```

## Self-Assessment Checklist

- [ ] I can write function declarations and function expressions
- [ ] I understand the difference between declarations and expressions
- [ ] I can use arrow functions with proper syntax
- [ ] I know how to use default parameters
- [ ] I understand the difference between returning values and printing
- [ ] I can write functions that take other functions as parameters
- [ ] I can create functions that return other functions
- [ ] I understand function scope and closures
- [ ] I can write recursive functions when appropriate
- [ ] I follow best practices for function naming and structure

## Additional Practice Resources

1. Practice converting between different function syntaxes
2. Implement common algorithms as functions
3. Create utility function libraries
4. Practice with higher-order functions
5. Build projects using function composition
6. Experiment with closures and scope
7. Practice debugging function-related issues

---

**Next Topic:** [07 - Scope](./07-scope-exercises.md)
