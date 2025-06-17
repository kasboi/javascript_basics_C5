# Scope in JavaScript

> **Topic**: Functions (Extended)  
> **Concepts Covered**: Global scope, local scope, block scope, scope chain

## Understanding Scope

Scope determines where variables can be accessed in your code. It's like the "visibility" of variables.

## Types of Scope

### 1. Global Scope

Variables declared outside any function or block:

```javascript
let globalVariable = "I'm global"; // Can be accessed anywhere

function testFunction() {
  console.log(globalVariable); // ✅ Can access global variables
}

if (true) {
  console.log(globalVariable); // ✅ Can access global variables
}
```

### 2. Function Scope

Variables declared inside a function:

```javascript
function myFunction() {
  let functionVariable = "I'm local to this function";
  console.log(functionVariable); // ✅ Works inside the function
}

myFunction();
// console.log(functionVariable); // ❌ Error! Not accessible outside
```

### 3. Block Scope

Variables declared inside `{}` blocks (with `let` and `const`):

```javascript
if (true) {
  let blockVariable = "I'm in a block";
  const anotherBlockVar = "Me too!";
  console.log(blockVariable); // ✅ Works inside the block
}

// console.log(blockVariable); // ❌ Error! Not accessible outside
```

## Scope Examples

### Complex Scope Example

```javascript
const A = "A"; // Global scope
let F; // Global scope

function doStuff(B) {
  // B is function parameter
  console.log(B); // ✅ True - B is accessible within function
  const C = "C"; // Function scope
  let H = "H"; // Function scope

  if (1 + 1 === 2) {
    const D = "D"; // Block scope (inside if)
    H = "something else"; // Modifying function-scoped H
  }

  console.log(D); // ❌ False - D is block-scoped to if statement
  console.log(H); // ✅ True - H is function-scoped
  F = "F"; // Modifying global F
}

let E = 0; // Global scope

while (E < 3) {
  E++;
  console.log(A); // ✅ True - A is global
  const G = "G"; // Block scope (inside while)
}

console.log(E); // ✅ True - E is global
console.log(G); // ❌ False - G is block-scoped to while loop

doStuff("B");
console.log(B); // ❌ False - B is parameter of doStuff function
console.log(C); // ❌ False - C is function-scoped to doStuff
console.log(F); // ✅ True - F is global (modified inside doStuff)
```

### Nested Function Scope

```javascript
function outerFunction() {
  let outerVar = "I'm in outer function";

  function innerFunction() {
    let innerVar = "I'm in inner function";
    console.log(outerVar); // ✅ Can access outer function variables
    console.log(innerVar); // ✅ Can access own variables
  }

  innerFunction();
  console.log(outerVar); // ✅ Can access own variables
  // console.log(innerVar); // ❌ Cannot access inner function variables
}

outerFunction();
```

## Scope Chain

JavaScript looks for variables in this order:

1. Current scope
2. Outer scope
3. Global scope

```javascript
let global = "global";

function level1() {
  let level1Var = "level1";

  function level2() {
    let level2Var = "level2";

    function level3() {
      let level3Var = "level3";

      // Can access all outer scopes
      console.log(level3Var); // ✅ Current scope
      console.log(level2Var); // ✅ Parent scope
      console.log(level1Var); // ✅ Grandparent scope
      console.log(global); // ✅ Global scope
    }

    level3();
  }

  level2();
}

level1();
```

## Variable Shadowing

When inner scope variables have the same name as outer scope variables:

```javascript
let name = "Global Alice";

function greet() {
  let name = "Local Bob"; // Shadows the global 'name'
  console.log(name); // "Local Bob" - uses local variable
}

greet();
console.log(name); // "Global Alice" - global variable unchanged
```

## Let vs Var vs Const in Scope

### `var` - Function Scoped

```javascript
function testVar() {
  if (true) {
    var x = 1; // Function scoped, not block scoped
  }
  console.log(x); // ✅ 1 - var ignores block scope
}

testVar();
```

### `let` and `const` - Block Scoped

```javascript
function testLet() {
  if (true) {
    let y = 1; // Block scoped
    const z = 2; // Block scoped
  }
  // console.log(y); // ❌ Error - let respects block scope
  // console.log(z); // ❌ Error - const respects block scope
}

testLet();
```

## Common Scope Issues

### 1. Accidental Global Variables

```javascript
function badFunction() {
  // Forgot 'let' - creates global variable!
  badVariable = "Oops, I'm global";
}

badFunction();
console.log(badVariable); // "Oops, I'm global"
```

### 2. Loop Variable Issues

```javascript
// Common mistake with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Prints: 3, 3, 3 (not 0, 1, 2)
  }, 100);
}

// Fixed with let
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(j); // Prints: 0, 1, 2
  }, 100);
}
```

## Best Practices

### 1. Use `const` by Default

```javascript
const PI = 3.14159; // Won't change
const users = []; // Array reference won't change (but contents can)
```

### 2. Use `let` When You Need to Reassign

```javascript
let counter = 0; // Will be reassigned
let userInput; // Will be assigned later
```

### 3. Avoid `var`

```javascript
// ❌ Avoid
var oldStyle = "confusing scope";

// ✅ Prefer
let newStyle = "clear scope";
const constant = "won't change";
```

### 4. Keep Variables in the Smallest Scope Possible

```javascript
// ❌ Too broad scope
let result;
function calculate() {
  result = 5 * 10;
  return result;
}

// ✅ Proper scope
function calculate() {
  const result = 5 * 10;
  return result;
}
```

### 5. Use Descriptive Names

```javascript
// ❌ Unclear
function process(x) {
  let temp = x * 2;
  return temp;
}

// ✅ Clear
function doubleNumber(number) {
  const doubled = number * 2;
  return doubled;
}
```

## Debugging Scope Issues

### Use Console.log to Check Variable Access

```javascript
function debugScope() {
  console.log("Available variables:");
  console.log(
    typeof globalVar !== "undefined" ? globalVar : "globalVar not accessible",
  );
  console.log(
    typeof localVar !== "undefined" ? localVar : "localVar not accessible",
  );
}
```

### Use Browser Developer Tools

- Set breakpoints to inspect variable scope
- Use the "Scope" panel in DevTools to see available variables

## Key Takeaways

- **Global scope**: Variables accessible everywhere
- **Function scope**: Variables accessible only within the function
- **Block scope**: Variables accessible only within the block (with `let`/`const`)
- **Scope chain**: JavaScript searches for variables from inner to outer scope
- **Use `const` by default, `let` when needed, avoid `var`**
- **Keep variables in the smallest scope possible**
- **Be aware of variable shadowing**

## Practice Exercises

1. Write a function that demonstrates the difference between `let`, `const`, and `var` scoping
2. Create nested functions and practice accessing variables from different scope levels
3. Fix scope-related bugs in provided code examples
4. Write a closure function that demonstrates scope preservation
