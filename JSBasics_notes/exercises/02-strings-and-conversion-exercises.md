# Topic 2: Strings and Type Conversion - Exercises

## Multiple Choice Questions

### Question 1

What is the correct way to create a string in JavaScript?
A) `let str = 'Hello World'`
B) `let str = "Hello World"`
C) `let str = \`Hello World\``
D) All of the above

**Answer: D**
**Explanation:** JavaScript accepts single quotes, double quotes, and template literals (backticks) for creating strings.

### Question 2

What will `"5" + 3` return in JavaScript?
A) `8`
B) `"8"`
C) `"53"`
D) `Error`

**Answer: C**
**Explanation:** When using the + operator with a string and number, JavaScript concatenates them as strings.

### Question 3

Which method is used to convert a string to uppercase?
A) `toUpper()`
B) `toUpperCase()`
C) `upperCase()`
D) `upper()`

**Answer: B**
**Explanation:** The `toUpperCase()` method converts a string to uppercase letters.

### Question 4

What does `Number("123")` return?
A) `"123"`
B) `123`
C) `NaN`
D) `undefined`

**Answer: B**
**Explanation:** `Number()` function converts a valid numeric string to a number.

### Question 5

What will `Boolean("")` return?
A) `true`
B) `false`
C) `""`
D) `Error`

**Answer: B**
**Explanation:** Empty strings are falsy values, so `Boolean("")` returns `false`.

## Practical Coding Exercises

### Exercise 1: String Manipulation

Write a function that takes a person's first and last name and returns them in the format "Last, First".

```javascript
function formatName(firstName, lastName) {
  // Your code here
}

// Test your function
console.log(formatName("John", "Doe")); // Should output: "Doe, John"
```

**Solution:**

```javascript
function formatName(firstName, lastName) {
  return lastName + ", " + firstName;
}
```

### Exercise 2: String Length and Validation

Create a function that checks if a password meets these criteria:

- At least 8 characters long
- Contains both uppercase and lowercase letters

```javascript
function validatePassword(password) {
  // Your code here
}

// Test your function
console.log(validatePassword("Password123")); // Should return true
console.log(validatePassword("pass")); // Should return false
```

**Solution:**

```javascript
function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }

  let hasUpper = password !== password.toLowerCase();
  let hasLower = password !== password.toUpperCase();

  return hasUpper && hasLower;
}
```

### Exercise 3: Template Literals

Use template literals to create a function that generates a greeting message.

```javascript
function createGreeting(name, timeOfDay) {
  // Use template literals to create: "Good [timeOfDay], [name]! Welcome to our website."
}

// Test your function
console.log(createGreeting("Alice", "morning"));
```

**Solution:**

```javascript
function createGreeting(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}! Welcome to our website.`;
}
```

### Exercise 4: Type Conversion Practice

Create a function that takes any input and returns an object with different type conversions.

```javascript
function convertTypes(input) {
    return {
        original: input,
        toString: // Convert to string
        toNumber: // Convert to number
        toBoolean: // Convert to boolean
        type: // Get the type of original input
    };
}

// Test your function
console.log(convertTypes(42));
console.log(convertTypes("123"));
console.log(convertTypes(true));
```

**Solution:**

```javascript
function convertTypes(input) {
  return {
    original: input,
    toString: String(input),
    toNumber: Number(input),
    toBoolean: Boolean(input),
    type: typeof input,
  };
}
```

## JavaScript Test Functions

```javascript
// Test function for string exercises
function testStringExercises() {
  console.log("=== Testing String Exercises ===");

  // Test formatName
  const test1 = formatName("John", "Doe") === "Doe, John";
  console.log("formatName test:", test1 ? "PASS" : "FAIL");

  // Test validatePassword
  const test2 = validatePassword("Password123") === true;
  const test3 = validatePassword("pass") === false;
  console.log("validatePassword test:", test2 && test3 ? "PASS" : "FAIL");

  // Test createGreeting
  const test4 =
    createGreeting("Alice", "morning") ===
    "Good morning, Alice! Welcome to our website.";
  console.log("createGreeting test:", test4 ? "PASS" : "FAIL");

  // Test convertTypes
  const result = convertTypes(42);
  const test5 =
    result.toString === "42" &&
    result.toNumber === 42 &&
    result.type === "number";
  console.log("convertTypes test:", test5 ? "PASS" : "FAIL");
}

// Run tests
testStringExercises();
```

## Challenge Problems

### Challenge 1: String Reversal

Write a function that reverses a string without using the built-in `reverse()` method.

```javascript
function reverseString(str) {
  // Your code here - don't use str.split("").reverse().join("")
}

console.log(reverseString("hello")); // Should output: "olleh"
```

**Solution:**

```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```

### Challenge 2: Word Count

Create a function that counts the number of words in a string.

```javascript
function countWords(sentence) {
  // Your code here
}

console.log(countWords("Hello world")); // Should output: 2
console.log(countWords("  The  quick   brown  fox  ")); // Should output: 4
```

**Solution:**

```javascript
function countWords(sentence) {
  // Remove extra spaces and split by spaces
  return sentence
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}
```

### Challenge 3: Title Case Converter

Write a function that converts a string to title case (first letter of each word capitalized).

```javascript
function toTitleCase(str) {
  // Your code here
}

console.log(toTitleCase("hello world")); // Should output: "Hello World"
console.log(toTitleCase("the quick brown fox")); // Should output: "The Quick Brown Fox"
```

**Solution:**

```javascript
function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
```

## Debugging Exercises

### Debug Exercise 1

Find and fix the error in this code:

```javascript
function combineNames(first, last) {
  return first + " " + last;
}

let fullName = combineNames("John"); // This should work with just first name
console.log(fullName);
```

**Issue:** The function requires two parameters but only one is provided.
**Fix:**

```javascript
function combineNames(first, last = "") {
  return (first + " " + last).trim();
}
```

### Debug Exercise 2

Fix this type conversion issue:

```javascript
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers("5", "3")); // Should return 8, not "53"
```

**Fix:**

```javascript
function addNumbers(a, b) {
  return Number(a) + Number(b);
}
```

## Real-World Applications

### Application 1: Email Validator

Create a basic email validator function.

```javascript
function isValidEmail(email) {
  // Check if email contains @ and .
  // Check if there's text before and after @
  // Check if there's text after the last .
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid.email")); // false
```

### Application 2: Phone Number Formatter

Format a phone number string.

```javascript
function formatPhoneNumber(phoneNumber) {
  // Remove all non-digits
  // Format as (XXX) XXX-XXXX
}

console.log(formatPhoneNumber("1234567890")); // "(123) 456-7890"
console.log(formatPhoneNumber("123-456-7890")); // "(123) 456-7890"
```

## Self-Assessment Checklist

- [ ] I can create strings using different quote types
- [ ] I understand string concatenation vs template literals
- [ ] I can use common string methods (length, toUpperCase, toLowerCase, etc.)
- [ ] I understand the difference between explicit and implicit type conversion
- [ ] I can convert between strings, numbers, and booleans
- [ ] I know which values are truthy and falsy
- [ ] I can work with template literals and interpolation
- [ ] I can debug common string and conversion issues
- [ ] I can apply string manipulation in real-world scenarios

## Additional Practice Resources

1. Practice string methods on different inputs
2. Experiment with edge cases in type conversion
3. Build small projects using string manipulation
4. Try converting user input from forms
5. Practice with different data validation scenarios

---

**Next Topic:** [03 - Comparisons and Logic](./03-comparisons-and-logic-exercises.md)
