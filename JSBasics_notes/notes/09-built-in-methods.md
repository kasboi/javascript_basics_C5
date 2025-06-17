# Built-in Methods and Math

> **Topic**: Foundations (Extended)  
> **Concepts Covered**: String methods, Number methods, Math object

## String Built-in Methods

JavaScript provides many built-in methods to work with strings effectively.

### String Creation

```javascript
let str1 = "Hello, World!";
let str2 = "JavaScript";
let str3 = `Template literal with ${str1}`;
```

### Essential String Properties and Methods

#### Length Property

```javascript
let text = "Hello, World!";
console.log(text.length); // 13
```

#### Case Conversion

```javascript
let text = "Hello, World!";

console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"
console.log(text); // Original unchanged: "Hello, World!"
```

#### Finding and Searching

```javascript
let text = "Hello, World!";

// indexOf() - returns index of first occurrence
console.log(text.indexOf("World")); // 7
console.log(text.indexOf("world")); // -1 (case sensitive)
console.log(text.indexOf("o")); // 4 (first occurrence)

// lastIndexOf() - returns index of last occurrence
console.log(text.lastIndexOf("o")); // 8

// includes() - check if string contains substring
console.log(text.includes("World")); // true
console.log(text.includes("world")); // false

// startsWith() and endsWith()
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("!")); // true
```

#### Extracting Parts of Strings

```javascript
let text = "Hello, World!";

// substring() - extract between two indices
console.log(text.substring(0, 5)); // "Hello"
console.log(text.substring(7, 12)); // "World"

// slice() - similar to substring but can handle negative indices
console.log(text.slice(0, 5)); // "Hello"
console.log(text.slice(-6, -1)); // "World"
console.log(text.slice(7)); // "World!" (from index 7 to end)

// charAt() - get character at specific index
console.log(text.charAt(0)); // "H"
console.log(text.charAt(7)); // "W"
```

#### Modifying Strings

```javascript
let text = "Hello, World!";

// replace() - replace first occurrence
console.log(text.replace("World", "Universe")); // "Hello, Universe!"
console.log(text.replace("o", "0")); // "Hell0, World!" (only first occurrence)

// replaceAll() - replace all occurrences
console.log(text.replaceAll("o", "0")); // "Hell0, W0rld!"

// split() - split string into array
console.log(text.split(",")); // ["Hello", " World!"]
console.log(text.split("")); // ["H", "e", "l", "l", "o", ..., "!"]
console.log("apple,banana,cherry".split(",")); // ["apple", "banana", "cherry"]

// trim() - remove whitespace from both ends
let spacedText = "  Hello, World!  ";
console.log(spacedText.trim()); // "Hello, World!"
```

### Practical String Example: Palindrome Checker

```javascript
function isPalindrome(str) {
  // Clean the string: lowercase and remove non-alphanumeric characters
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Split into array, reverse, and join back
  const reversed = cleaned.split("").reverse().join("");

  // Compare original with reversed
  return cleaned === reversed;
}

// Test cases
const testCases = ["racecar", "rotator", "books", "radar", "leader", "noon"];
const results = testCases.map(isPalindrome);
console.log(results); // [true, true, false, true, false, true]

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("race a car")); // false
```

## Number Built-in Methods

### Number Creation and Conversion

```javascript
let num1 = 10;
let num2 = 3.14159;
let stringNum = "42";

// Convert string to number
console.log(parseInt("10")); // 10 (integer)
console.log(parseInt("10.5")); // 10 (cuts off decimal)
console.log(parseFloat("3.14")); // 3.14 (keeps decimal)
console.log(Number("42")); // 42 (converts entire string)

// Check if value is a number
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false (it's not NaN, it's a string)
console.log(isNaN("hello")); // true (tries to convert first)
```

### Number Formatting

```javascript
let num = 3.14159;

// toFixed() - format to specific decimal places
console.log(num.toFixed(2)); // "3.14" (string)
console.log(num.toFixed(0)); // "3" (string)

// toString() - convert number to string
console.log(num.toString()); // "3.14159"

// toPrecision() - format to specific number of significant digits
console.log(num.toPrecision(3)); // "3.14"
console.log((1234).toPrecision(3)); // "1.23e+3"
```

## Math Object

The Math object provides mathematical constants and functions.

### Math Constants

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
```

### Basic Math Methods

```javascript
// Absolute value
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5

// Rounding methods
console.log(Math.ceil(3.14)); // 4 (round up)
console.log(Math.floor(3.14)); // 3 (round down)
console.log(Math.round(3.14)); // 3 (round to nearest)
console.log(Math.round(3.64)); // 4

// Min and Max
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(...[1, 2, 3, 4, 5])); // 5 (using spread operator)

// Power and square root
console.log(Math.pow(2, 3)); // 8 (2 to the power of 3)
console.log(Math.sqrt(16)); // 4 (square root of 16)
console.log(Math.cbrt(27)); // 3 (cube root of 27)
```

### Random Numbers

```javascript
// Math.random() returns a number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g., 0.123456789

// Random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 6)); // Random number between 1 and 6 (dice roll)
console.log(randomInt(10, 20)); // Random number between 10 and 20

// Random element from array
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let colors = ["red", "blue", "green", "yellow"];
console.log(randomElement(colors)); // Random color
```

### Advanced Math Methods

```javascript
// Trigonometric functions (work with radians)
console.log(Math.sin(Math.PI / 2)); // 1 (sin of 90 degrees)
console.log(Math.cos(0)); // 1 (cos of 0 degrees)

// Logarithmic functions
console.log(Math.log(Math.E)); // 1 (natural logarithm)
console.log(Math.log10(100)); // 2 (base-10 logarithm)

// Sign function
console.log(Math.sign(-5)); // -1
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0
```

## Practical Examples

### Temperature Converter

```javascript
function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

console.log(celsiusToFahrenheit(25)); // 77°F
console.log(fahrenheitToCelsius(77)); // 25°C
```

### Password Generator

```javascript
function generatePassword(length = 8) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

console.log(generatePassword()); // Random 8-character password
console.log(generatePassword(12)); // Random 12-character password
```

### Text Statistics

```javascript
function textStats(text) {
  const words = text.trim().split(/\s+/);
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const vowels = text.match(/[aeiouAEIOU]/g) || [];

  return {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, "").length,
    words: words.length,
    sentences: sentences.length,
    vowels: vowels.length,
    averageWordsPerSentence:
      Math.round((words.length / sentences.length) * 100) / 100,
  };
}

let text = "Hello world! How are you today? This is a test.";
console.log(textStats(text));
```

### Number Formatter

```javascript
function formatNumber(num, decimals = 2) {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
}

console.log(formatNumber(1234.567)); // "1,234.57"
console.log(formatCurrency(1234.56)); // "$1,234.56"
console.log(formatCurrency(1234.56, "EUR")); // "€1,234.56"
```

## Best Practices

1. **Chain string methods carefully**: Remember each method returns a new string
2. **Use appropriate rounding**: `Math.round()`, `Math.ceil()`, or `Math.floor()` based on needs
3. **Handle edge cases**: Check for empty strings, NaN, etc.
4. **Use `Number.isNaN()` instead of `isNaN()`**: More reliable type checking
5. **Remember Math.random() range**: 0 (inclusive) to 1 (exclusive)

## Common Pitfalls

1. **String methods return new strings**: Original string is unchanged
2. **Case sensitivity**: "Hello" !== "hello"
3. **parseInt() with leading zeros**: Can be interpreted as octal
4. **Floating point precision**: 0.1 + 0.2 !== 0.3 exactly

## Key Takeaways

- **String methods**: Powerful tools for text manipulation
- **Math object**: Essential for mathematical operations
- **Immutable strings**: Methods return new strings, don't modify originals
- **Random numbers**: Use Math.random() with Math.floor() for integers
- **Number formatting**: Use toFixed() for decimal places, toLocaleString() for locale-specific formatting

## Practice Exercises

1. Create a function that counts words, sentences, and paragraphs in text
2. Build a string cipher that shifts letters by a certain amount
3. Write a function that validates email addresses using string methods
4. Create a random quote generator
5. Build a simple calculator using Math methods
