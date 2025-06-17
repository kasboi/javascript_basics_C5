# String Manipulation and Type Conversion

> **Topic**: Foundations (Extended)  
> **Concepts Covered**: String operations, template literals, type conversion

## String Concatenation and Interpolation

### String Concatenation (Traditional)

Joining strings using the `+` operator:

```javascript
const first_name = "John";
const last_name = "Wick";

const sentence = "His name is " + first_name + " " + last_name;
console.log(sentence); // "His name is John Wick"
```

### String Interpolation (Modern)

Using template literals with backticks and `${}`:

```javascript
const first_name = "John";
const last_name = "Wick";

// Template literals (preferred method)
const new_sentence = `His name is ${first_name} ${last_name}`;
console.log(new_sentence); // "His name is John Wick"

// You can include expressions
console.log(`The sum of 2 and 5 = ${2 + 5}`); // "The sum of 2 and 5 = 7"
```

## Type Conversion

JavaScript can convert between different data types:

### Converting to String

Using `String()` function:

```javascript
let num1 = 200;
let bool = true;

let new_num = String(num1); // "200"
let new_bool = String(bool); // "true"

console.log(new_num, typeof new_num); // "200" "string"
console.log(String(undefined)); // "undefined"
console.log(String(null)); // "null"
```

### Converting to Number

Using `Number()` function:

```javascript
// Rules for Number conversion:
console.log(Number("")); // 0 (empty string becomes 0)
console.log(Number("nigeria")); // NaN (invalid number string)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number("1980")); // 1980 (valid number string)
```

### Converting to Boolean

Using `Boolean()` function:

```javascript
// FALSY VALUES (convert to false):
// 0, null, undefined, NaN, ""

console.log(Boolean("nice")); // true
console.log(Boolean("")); // false (empty string)
console.log(Boolean(200)); // true
console.log(Boolean(" ")); // true (NOT empty - contains space)
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
```

### Quick Conversion Tricks

```javascript
// Convert to number using +
let age = +prompt("How old are you?"); // + converts string to number

// Convert to string using template literals
let numStr = `${42}`; // "42"
```

## Practice Exercise

Create variables for your favorite food, color, and hobby, then use string interpolation to create this sentence:

```javascript
const favoriteFood = "pizza";
const favoriteColor = "blue";
const favoriteHobby = "coding";

const sentence = `I love eating ${favoriteFood}, my favorite color is ${favoriteColor}, and I enjoy ${favoriteHobby}.`;
console.log(sentence);
```

## Key Takeaways

- Use template literals (`${}`) for string interpolation - it's cleaner than concatenation
- Empty string, 0, null, undefined, and NaN are all "falsy" values
- JavaScript performs automatic type conversion in many situations
- Be explicit about type conversion to avoid unexpected behavior
- The `+` operator can convert strings to numbers when used as a unary operator
