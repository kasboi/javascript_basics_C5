# Topic 3: Comparisons and Logic - Exercises

## Multiple Choice Questions

### Question 1

What is the difference between `==` and `===` in JavaScript?
A) No difference, they work the same way
B) `==` checks type and value, `===` only checks value
C) `===` checks type and value, `==` only checks value
D) `===` checks type and value, `==` performs type coercion

**Answer: D**
**Explanation:** `===` (strict equality) checks both type and value, while `==` (loose equality) performs type coercion before comparison.

### Question 2

What will `"5" == 5` return?
A) `true`
B) `false`
C) `Error`
D) `undefined`

**Answer: A**
**Explanation:** The `==` operator performs type coercion, converting the string "5" to number 5 before comparison.

### Question 3

What will `"5" === 5` return?
A) `true`
B) `false`
C) `Error`
D) `undefined`

**Answer: B**
**Explanation:** The `===` operator checks both type and value. Since "5" is a string and 5 is a number, they are not strictly equal.

### Question 4

What does the logical AND (`&&`) operator return when both operands are truthy?
A) `true`
B) `false`
C) The first operand
D) The second operand

**Answer: D**
**Explanation:** The `&&` operator returns the second operand when both operands are truthy.

### Question 5

What will `!!"hello"` return?
A) `true`
B) `false`
C) `"hello"`
D) `Error`

**Answer: A**
**Explanation:** The double NOT operator (`!!`) converts a value to its boolean equivalent. "hello" is truthy, so `!!"hello"` returns `true`.

### Question 6

Which of the following values is falsy in JavaScript?
A) `"0"`
B) `[]`
C) `{}`
D) `0`

**Answer: D**
**Explanation:** The number `0` is falsy. `"0"` is a non-empty string (truthy), `[]` is an empty array (truthy), and `{}` is an empty object (truthy).

## Practical Coding Exercises

### Exercise 1: Age Comparison

Write a function that compares two ages and returns a descriptive message.

```javascript
function compareAges(age1, age2) {
  // Return "Same age", "First person is older", or "Second person is older"
}

// Test your function
console.log(compareAges(25, 30)); // "Second person is older"
console.log(compareAges(30, 25)); // "First person is older"
console.log(compareAges(25, 25)); // "Same age"
```

**Solution:**

```javascript
function compareAges(age1, age2) {
  if (age1 === age2) {
    return "Same age";
  } else if (age1 > age2) {
    return "First person is older";
  } else {
    return "Second person is older";
  }
}
```

### Exercise 2: Login Validation

Create a function that validates login credentials.

```javascript
function validateLogin(username, password) {
  // Return true if username is not empty AND password is at least 6 characters
  // Return false otherwise
}

// Test your function
console.log(validateLogin("user123", "password")); // true
console.log(validateLogin("", "password")); // false
console.log(validateLogin("user123", "123")); // false
```

**Solution:**

```javascript
function validateLogin(username, password) {
  return username.length > 0 && password.length >= 6;
}
```

### Exercise 3: Grade Evaluator

Write a function that determines if a student passes based on multiple criteria.

```javascript
function evaluateStudent(attendance, assignments, finalExam) {
  // Student passes if:
  // - Attendance is >= 80% AND
  // - (Assignments >= 70% OR Final exam >= 80%)

  return; // Your logic here
}

// Test your function
console.log(evaluateStudent(85, 75, 60)); // true (attendance + assignments)
console.log(evaluateStudent(85, 60, 85)); // true (attendance + final exam)
console.log(evaluateStudent(75, 75, 75)); // false (attendance too low)
```

**Solution:**

```javascript
function evaluateStudent(attendance, assignments, finalExam) {
  return attendance >= 80 && (assignments >= 70 || finalExam >= 80);
}
```

### Exercise 4: Number Range Checker

Create a function that checks if a number is within a specific range.

```javascript
function isInRange(number, min, max, inclusive = true) {
  // Check if number is between min and max
  // If inclusive is true, include the endpoints
  // If inclusive is false, exclude the endpoints
}

// Test your function
console.log(isInRange(5, 1, 10, true)); // true
console.log(isInRange(10, 1, 10, true)); // true
console.log(isInRange(10, 1, 10, false)); // false
```

**Solution:**

```javascript
function isInRange(number, min, max, inclusive = true) {
  if (inclusive) {
    return number >= min && number <= max;
  } else {
    return number > min && number < max;
  }
}
```

### Exercise 5: Truthiness Checker

Write a function that categorizes values as truthy or falsy.

```javascript
function checkTruthiness(value) {
    return {
        value: value,
        isTruthy: // Your code here
        type: typeof value
    };
}

// Test your function
console.log(checkTruthiness(0));
console.log(checkTruthiness(""));
console.log(checkTruthiness("hello"));
console.log(checkTruthiness([]));
```

**Solution:**

```javascript
function checkTruthiness(value) {
  return {
    value: value,
    isTruthy: !!value,
    type: typeof value,
  };
}
```

## JavaScript Test Functions

```javascript
// Test function for comparison and logic exercises
function testComparisonExercises() {
  console.log("=== Testing Comparison and Logic Exercises ===");

  // Test compareAges
  const test1 = compareAges(25, 30) === "Second person is older";
  const test2 = compareAges(30, 25) === "First person is older";
  const test3 = compareAges(25, 25) === "Same age";
  console.log("compareAges test:", test1 && test2 && test3 ? "PASS" : "FAIL");

  // Test validateLogin
  const test4 = validateLogin("user123", "password") === true;
  const test5 = validateLogin("", "password") === false;
  const test6 = validateLogin("user123", "123") === false;
  console.log("validateLogin test:", test4 && test5 && test6 ? "PASS" : "FAIL");

  // Test evaluateStudent
  const test7 = evaluateStudent(85, 75, 60) === true;
  const test8 = evaluateStudent(85, 60, 85) === true;
  const test9 = evaluateStudent(75, 75, 75) === false;
  console.log(
    "evaluateStudent test:",
    test7 && test8 && test9 ? "PASS" : "FAIL",
  );

  // Test isInRange
  const test10 = isInRange(5, 1, 10, true) === true;
  const test11 = isInRange(10, 1, 10, false) === false;
  console.log("isInRange test:", test10 && test11 ? "PASS" : "FAIL");

  // Test checkTruthiness
  const result = checkTruthiness(0);
  const test12 = result.isTruthy === false && result.type === "number";
  console.log("checkTruthiness test:", test12 ? "PASS" : "FAIL");
}

// Run tests
testComparisonExercises();
```

## Challenge Problems

### Challenge 1: Complex Validation

Create a function that validates a user registration form with multiple conditions.

```javascript
function validateRegistration(userData) {
    // userData = { username, email, password, age, terms }
    // Rules:
    // - Username: 3-20 characters, alphanumeric only
    // - Email: must contain @ and .
    // - Password: at least 8 characters, contains number and letter
    // - Age: must be 18 or older
    // - Terms: must be true

    return {
        isValid: // overall validity
        errors: // array of error messages
    };
}

const testUser = {
    username: "user123",
    email: "user@example.com",
    password: "password123",
    age: 25,
    terms: true
};

console.log(validateRegistration(testUser));
```

**Solution:**

```javascript
function validateRegistration(userData) {
  const errors = [];

  // Username validation
  if (
    !userData.username ||
    userData.username.length < 3 ||
    userData.username.length > 20
  ) {
    errors.push("Username must be 3-20 characters");
  }
  if (!/^[a-zA-Z0-9]+$/.test(userData.username)) {
    errors.push("Username must be alphanumeric only");
  }

  // Email validation
  if (
    !userData.email ||
    !userData.email.includes("@") ||
    !userData.email.includes(".")
  ) {
    errors.push("Email must contain @ and .");
  }

  // Password validation
  if (!userData.password || userData.password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }
  if (!/\d/.test(userData.password) || !/[a-zA-Z]/.test(userData.password)) {
    errors.push("Password must contain both letters and numbers");
  }

  // Age validation
  if (!userData.age || userData.age < 18) {
    errors.push("Must be 18 or older");
  }

  // Terms validation
  if (!userData.terms) {
    errors.push("Must accept terms and conditions");
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}
```

### Challenge 2: Logic Gate Simulator

Create functions that simulate basic logic gates.

```javascript
function andGate(a, b) {
  // Return true only if both inputs are true
}

function orGate(a, b) {
  // Return true if at least one input is true
}

function notGate(a) {
  // Return the opposite of the input
}

function xorGate(a, b) {
  // Return true if inputs are different
}

// Test your logic gates
console.log("AND Gate Tests:");
console.log(andGate(true, true)); // true
console.log(andGate(true, false)); // false
console.log(andGate(false, false)); // false

console.log("XOR Gate Tests:");
console.log(xorGate(true, false)); // true
console.log(xorGate(true, true)); // false
```

**Solution:**

```javascript
function andGate(a, b) {
  return a && b;
}

function orGate(a, b) {
  return a || b;
}

function notGate(a) {
  return !a;
}

function xorGate(a, b) {
  return (a || b) && !(a && b);
}
```

### Challenge 3: Smart Comparison Function

Write a function that performs "smart" comparison with various options.

```javascript
function smartCompare(a, b, options = {}) {
  // options can include:
  // - strict: use === instead of ==
  // - ignoreCase: ignore case for strings
  // - ignoreType: convert to same type before comparing
  // Return object with comparison result and details
}

console.log(smartCompare("Hello", "hello", { ignoreCase: true }));
console.log(smartCompare("5", 5, { ignoreType: true, strict: false }));
```

**Solution:**

```javascript
function smartCompare(a, b, options = {}) {
  let valueA = a;
  let valueB = b;

  // Apply transformations based on options
  if (options.ignoreCase && typeof a === "string" && typeof b === "string") {
    valueA = a.toLowerCase();
    valueB = b.toLowerCase();
  }

  if (options.ignoreType) {
    valueA = String(a);
    valueB = String(b);
  }

  // Perform comparison
  let result;
  if (options.strict) {
    result = valueA === valueB;
  } else {
    result = valueA == valueB;
  }

  return {
    result: result,
    originalValues: [a, b],
    comparedValues: [valueA, valueB],
    optionsUsed: options,
  };
}
```

## Debugging Exercises

### Debug Exercise 1

Find and fix the logical error:

```javascript
function canVote(age, citizenship) {
  // Should return true if person is 18+ AND a citizen
  return age >= 18 || citizenship === "citizen";
}

console.log(canVote(16, "citizen")); // Should be false but returns true
```

**Issue:** Using OR (`||`) instead of AND (`&&`).
**Fix:**

```javascript
function canVote(age, citizenship) {
  return age >= 18 && citizenship === "citizen";
}
```

### Debug Exercise 2

Fix this comparison issue:

```javascript
function isEqual(a, b) {
  if ((a = b)) {
    // Assignment instead of comparison
    return true;
  }
  return false;
}
```

**Issue:** Using assignment (`=`) instead of comparison (`==` or `===`).
**Fix:**

```javascript
function isEqual(a, b) {
  return a === b;
}
```

### Debug Exercise 3

Fix the precedence issue:

```javascript
function checkAccess(isLoggedIn, hasPermission, isAdmin) {
  // Should allow access if user is logged in AND (has permission OR is admin)
  return (isLoggedIn && hasPermission) || isAdmin;
}
```

**Issue:** Missing parentheses causing incorrect operator precedence.
**Fix:**

```javascript
function checkAccess(isLoggedIn, hasPermission, isAdmin) {
  return isLoggedIn && (hasPermission || isAdmin);
}
```

## Real-World Applications

### Application 1: Form Validation

Create a contact form validator.

```javascript
function validateContactForm(formData) {
  const { name, email, phone, message, newsletter } = formData;

  // Validation rules:
  // - Name: required, 2-50 characters
  // - Email: required, must contain @ and .
  // - Phone: optional, but if provided must be 10 digits
  // - Message: required, 10-500 characters
  // - Newsletter: boolean (for consent)

  // Return validation result with specific error messages
}
```

### Application 2: Access Control System

Implement a role-based access control checker.

```javascript
function checkAccess(user, resource, action) {
    // user: { role, permissions, active }
    // resource: string (e.g., "documents", "users")
    // action: string (e.g., "read", "write", "delete")

    // Rules:
    // - User must be active
    // - Admin can do everything
    // - Other roles need specific permissions

    return {
        allowed: // boolean
        reason: // string explaining why access was granted/denied
    };
}
```

### Application 3: Shopping Cart Discount Calculator

Create a function that determines applicable discounts.

```javascript
function calculateDiscount(cart, user) {
    // cart: { items, total, itemCount }
    // user: { membershipLevel, firstTime, birthday }

    // Discount rules:
    // - 10% off for premium members
    // - 15% off for first-time customers
    // - 20% off on birthday (if today is birthday)
    // - 5% off for orders over $100
    // - Maximum one discount applies (choose best for customer)

    return {
        discountPercent: // number
        discountAmount: // number
        finalTotal: // number
        reasonApplied: // string
    };
}
```

## Self-Assessment Checklist

- [ ] I understand the difference between `==` and `===`
- [ ] I can use logical operators (`&&`, `||`, `!`) correctly
- [ ] I know which values are truthy and falsy in JavaScript
- [ ] I can write complex conditional expressions
- [ ] I understand operator precedence and use parentheses when needed
- [ ] I can debug logical errors in conditional statements
- [ ] I can combine multiple comparison operators effectively
- [ ] I can validate form data using logical operators
- [ ] I understand short-circuit evaluation in logical operators
- [ ] I can write readable and maintainable conditional logic

## Additional Practice Resources

1. Practice with truth tables for logical operators
2. Experiment with type coercion in comparisons
3. Build validation functions for different scenarios
4. Create decision trees using nested conditionals
5. Practice debugging logical errors in existing code

---

**Next Topic:** [05 - Loops](./05-loops-exercises.md)
