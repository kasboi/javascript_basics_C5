# Comparisons and Logical Operators

> **Topic**: Foundations (Extended)  
> **Concepts Covered**: Comparison operators, logical operators, truthiness

## Comparison Operators

Comparisons evaluate to boolean values (`true` or `false`):

### Basic Comparisons

```javascript
console.log(2 > 1); // true
console.log(8 < 15); // true
console.log(2 == 1); // false
console.log(2 != 1); // true (not equal)
console.log(2 >= 2); // true (greater than or equal)
```

### Loose vs Strict Equality

This is a crucial concept in JavaScript:

```javascript
let a = 0; // number
let b = "0"; // string

// Loose equality (==) - performs type conversion
console.log(a == b); // true (converts "0" to 0)
console.log(0 == false); // true (both are "falsy")
console.log("" == false); // true (empty string is falsy)

// Strict equality (===) - no type conversion
console.log(a === b); // false (different types)
console.log(0 === false); // false (different types)
```

### Special Case: Null and Undefined

```javascript
console.log(null == undefined); // true (special exception)
console.log(null === undefined); // false (different types)
```

**Best Practice**: Always use strict equality (`===`) and strict inequality (`!==`) to avoid unexpected behavior.

## Logical Operators

### Truth Table Reference

| A     | B     | A AND B (&&) | A OR B (\|\|) |
| ----- | ----- | ------------ | ------------- |
| true  | true  | true         | true          |
| true  | false | false        | true          |
| false | true  | false        | true          |
| false | false | false        | false         |

### AND Operator (&&)

Returns the first "falsy" value or the last value if all are "truthy":

```javascript
console.log(2 && 3); // 3 (both truthy, returns last)
console.log(2 && 0 && 3); // 0 (first falsy value)
console.log("hello" && 42); // 42 (both truthy, returns last)
console.log(null && 42); // null (null is falsy)
```

### OR Operator (||)

Returns the first "truthy" value or the last value if all are "falsy":

```javascript
console.log(1 || 0); // 1 (first truthy value)
console.log(null || 1); // 1 (first truthy value)
console.log(null || 0 || 1); // 1 (first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns last)
```

### NOT Operator (!)

Converts to boolean and inverts it:

```javascript
console.log(!true); // false
console.log(!0); // true (0 is falsy, so !0 is true)
console.log(!"hello"); // false ("hello" is truthy)
```

### Double NOT (!!)

Converts any value to its boolean equivalent:

```javascript
console.log(!!"hello"); // true (converts to boolean)
console.log(!!0); // false (converts to boolean)
console.log(!!null); // false
console.log(!!""); // false (empty string is falsy)
```

## Short-Circuiting

Logical operators stop evaluating as soon as the result is determined:

```javascript
let x = 0;
let y = 10;

// AND stops at first falsy value
console.log(x && y); // 0 (x is falsy, doesn't evaluate y)

// OR stops at first truthy value
console.log(x || y); // 10 (x is falsy, so evaluates and returns y)
```

### Practical Use Cases

```javascript
// Default values with OR
let username = userInput || "Anonymous";

// Conditional execution with AND
isLoggedIn && showDashboard();

// Guard clauses
user && user.name && console.log(user.name);
```

## Falsy and Truthy Values

### Falsy Values (there are only 6)

- `false`
- `0` (and `-0`)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values

Everything else is truthy, including:

- Any non-zero number
- Any non-empty string (even `" "` with just a space)
- Empty arrays `[]`
- Empty objects `{}`
- Functions

## Key Takeaways

- Use `===` and `!==` instead of `==` and `!=`
- Logical operators return actual values, not just `true`/`false`
- Understand falsy vs truthy for effective conditional logic
- Short-circuiting can be used for default values and conditional execution
- The double NOT (`!!`) is a quick way to convert to boolean

## Practice Exercises

1. Compare different data types using both `==` and `===`
2. Practice using logical operators with various combinations
3. Create conditional logic using short-circuiting
4. Test your understanding of falsy/truthy values
