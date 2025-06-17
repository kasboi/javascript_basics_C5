# Topic 5: Loops - Exercises

## Multiple Choice Questions

### Question 1

Which loop is best for iterating over an array when you need the index?
A) `for...in` loop
B) `for...of` loop
C) `for` loop
D) `while` loop

**Answer: C**
**Explanation:** A traditional `for` loop gives you direct access to the index and is most commonly used for array iteration with index access.

### Question 2

What will this code output?

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

A) 0 1 2 3
B) 1 2 3
C) 0 1 2
D) Error

**Answer: C**
**Explanation:** The loop starts at 0, continues while i < 3, and increments after each iteration, so it prints 0, 1, 2.

### Question 3

What happens if you forget the increment in a `for` loop?
A) The loop runs once
B) The loop doesn't run at all
C) The loop runs infinitely
D) Syntax error

**Answer: C**
**Explanation:** Without incrementing the counter, the condition never changes, creating an infinite loop.

### Question 4

Which statement is used to skip the current iteration and continue with the next one?
A) `break`
B) `continue`
C) `return`
D) `skip`

**Answer: B**
**Explanation:** The `continue` statement skips the rest of the current iteration and jumps to the next iteration.

### Question 5

What's the difference between `for...in` and `for...of` loops?
A) No difference
B) `for...in` iterates over values, `for...of` iterates over indices
C) `for...in` iterates over indices/keys, `for...of` iterates over values
D) `for...of` is only for objects

**Answer: C**
**Explanation:** `for...in` iterates over enumerable properties (indices/keys), while `for...of` iterates over iterable values.

### Question 6

What will happen with this `while` loop?

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  // Missing i++
}
```

A) Prints 0 1 2 3 4
B) Prints nothing
C) Infinite loop
D) Syntax error

**Answer: C**
**Explanation:** Without incrementing `i`, the condition `i < 5` never becomes false, creating an infinite loop.

## Practical Coding Exercises

### Exercise 1: Basic For Loop

Write a function that prints numbers from 1 to n.

```javascript
function printNumbers(n) {
  // Use a for loop to print numbers from 1 to n
}

// Test your function
printNumbers(5); // Should print: 1 2 3 4 5
```

**Solution:**

```javascript
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

### Exercise 2: Sum Calculator

Create a function that calculates the sum of numbers from 1 to n.

```javascript
function calculateSum(n) {
  // Return the sum of numbers from 1 to n
}

// Test your function
console.log(calculateSum(5)); // Should return: 15 (1+2+3+4+5)
console.log(calculateSum(10)); // Should return: 55
```

**Solution:**

```javascript
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

### Exercise 3: Array Processing

Write a function that finds all even numbers in an array.

```javascript
function findEvenNumbers(numbers) {
  // Return a new array containing only even numbers
}

// Test your function
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(findEvenNumbers([1, 3, 5])); // []
```

**Solution:**

```javascript
function findEvenNumbers(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
```

### Exercise 4: String Character Counter

Create a function that counts occurrences of each character in a string.

```javascript
function countCharacters(str) {
  // Return an object with character counts
}

// Test your function
console.log(countCharacters("hello")); // {h: 1, e: 1, l: 2, o: 1}
console.log(countCharacters("javascript")); // {j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1}
```

**Solution:**

```javascript
function countCharacters(str) {
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}
```

### Exercise 5: Multiplication Table

Write a function that creates a multiplication table.

```javascript
function multiplicationTable(n) {
  // Print multiplication table for number n (n x 1 through n x 10)
}

// Test your function
multiplicationTable(5);
// Should print:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
```

**Solution:**

```javascript
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
```

### Exercise 6: While Loop Practice

Create a function that finds the first number whose square is greater than a given value.

```javascript
function findSquareGreaterThan(target) {
  // Use a while loop to find the first number whose square > target
}

// Test your function
console.log(findSquareGreaterThan(20)); // Should return 5 (5^2 = 25 > 20)
console.log(findSquareGreaterThan(100)); // Should return 11 (11^2 = 121 > 100)
```

**Solution:**

```javascript
function findSquareGreaterThan(target) {
  let num = 1;
  while (num * num <= target) {
    num++;
  }
  return num;
}
```

## JavaScript Test Functions

```javascript
// Test function for loop exercises
function testLoopExercises() {
  console.log("=== Testing Loop Exercises ===");

  // Test calculateSum
  const test1 = calculateSum(5) === 15;
  const test2 = calculateSum(10) === 55;
  console.log("calculateSum test:", test1 && test2 ? "PASS" : "FAIL");

  // Test findEvenNumbers
  const result1 = findEvenNumbers([1, 2, 3, 4, 5, 6]);
  const test3 = JSON.stringify(result1) === JSON.stringify([2, 4, 6]);
  const result2 = findEvenNumbers([1, 3, 5]);
  const test4 = result2.length === 0;
  console.log("findEvenNumbers test:", test3 && test4 ? "PASS" : "FAIL");

  // Test countCharacters
  const result3 = countCharacters("hello");
  const test5 = result3.h === 1 && result3.l === 2;
  console.log("countCharacters test:", test5 ? "PASS" : "FAIL");

  // Test findSquareGreaterThan
  const test6 = findSquareGreaterThan(20) === 5;
  const test7 = findSquareGreaterThan(100) === 11;
  console.log("findSquareGreaterThan test:", test6 && test7 ? "PASS" : "FAIL");
}

// Run tests
testLoopExercises();
```

## Challenge Problems

### Challenge 1: Pattern Generator

Create a function that generates various patterns using loops.

```javascript
function generatePattern(type, size) {
  // type can be: "triangle", "square", "diamond"
  // size determines the dimensions
}

// Examples:
generatePattern("triangle", 4);
// *
// **
// ***
// ****

generatePattern("square", 3);
// ***
// ***
// ***

generatePattern("diamond", 3);
//  *
// ***
//  *
```

**Solution:**

```javascript
function generatePattern(type, size) {
  switch (type) {
    case "triangle":
      for (let i = 1; i <= size; i++) {
        console.log("*".repeat(i));
      }
      break;

    case "square":
      for (let i = 0; i < size; i++) {
        console.log("*".repeat(size));
      }
      break;

    case "diamond":
      // Upper half
      for (let i = 1; i <= size; i += 2) {
        const spaces = " ".repeat((size - i) / 2);
        console.log(spaces + "*".repeat(i));
      }
      // Lower half
      for (let i = size - 2; i >= 1; i -= 2) {
        const spaces = " ".repeat((size - i) / 2);
        console.log(spaces + "*".repeat(i));
      }
      break;
  }
}
```

### Challenge 2: Prime Number Finder

Write a function that finds all prime numbers up to a given number.

```javascript
function findPrimes(limit) {
  // Return an array of all prime numbers from 2 to limit
}

console.log(findPrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
```

**Solution:**

```javascript
function findPrimes(limit) {
  const primes = [];

  for (let num = 2; num <= limit; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  return primes;
}
```

### Challenge 3: Fibonacci Sequence

Create a function that generates the Fibonacci sequence up to n terms.

```javascript
function fibonacciSequence(n) {
  // Return array with first n Fibonacci numbers
  // Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
}

console.log(fibonacciSequence(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
```

**Solution:**

```javascript
function fibonacciSequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}
```

### Challenge 4: Matrix Operations

Write functions to work with 2D arrays (matrices).

```javascript
function createMatrix(rows, cols, fillValue = 0) {
  // Create a matrix filled with fillValue
}

function printMatrix(matrix) {
  // Print matrix in a readable format
}

function findMaxInMatrix(matrix) {
  // Find the maximum value in the matrix
}

// Test your functions
const matrix = createMatrix(3, 3, 5);
printMatrix(matrix);
console.log(
  "Max value:",
  findMaxInMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
```

**Solution:**

```javascript
function createMatrix(rows, cols, fillValue = 0) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(fillValue);
    }
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
}

function findMaxInMatrix(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}
```

## Debugging Exercises

### Debug Exercise 1

Fix the infinite loop:

```javascript
function countDown(start) {
  while (start > 0) {
    console.log(start);
    // Missing decrement
  }
  console.log("Done!");
}
```

**Fix:**

```javascript
function countDown(start) {
  while (start > 0) {
    console.log(start);
    start--; // Add decrement
  }
  console.log("Done!");
}
```

### Debug Exercise 2

Fix the off-by-one error:

```javascript
function printArrayElements(arr) {
  for (let i = 0; i <= arr.length; i++) {
    // Should be < not <=
    console.log(arr[i]);
  }
}
```

**Fix:**

```javascript
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

### Debug Exercise 3

Fix the scope issue:

```javascript
function findNumbers() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // Will print 3, 3, 3 instead of 0, 1, 2
    }, 100);
  }
}
```

**Fix:**

```javascript
function findNumbers() {
  for (let i = 0; i < 3; i++) {
    // Use let instead of var
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}
```

## Real-World Applications

### Application 1: Data Processing

Process a list of orders and calculate statistics.

```javascript
function processOrders(orders) {
  // orders = [{ id, amount, customer, date }, ...]
  // Calculate: total revenue, average order, customer count

  let totalRevenue = 0;
  let customerSet = new Set();

  for (let order of orders) {
    // Process each order
  }

  return {
    totalRevenue,
    averageOrder: totalRevenue / orders.length,
    uniqueCustomers: customerSet.size,
    orderCount: orders.length,
  };
}
```

### Application 2: Search and Filter

Implement search functionality for a product catalog.

```javascript
function searchProducts(products, searchTerm, filters = {}) {
  // products = [{ name, category, price, inStock }, ...]
  // filters = { category, maxPrice, inStockOnly }

  const results = [];

  for (let product of products) {
    // Check if product matches search term and filters
  }

  return results;
}
```

### Application 3: Game Score Calculator

Calculate scores for a simple game.

```javascript
function calculateGameScores(gameData) {
  // gameData = [{ player, rounds: [score1, score2, ...] }, ...]
  // Calculate total and average for each player

  const playerStats = [];

  for (let playerData of gameData) {
    let total = 0;
    // Calculate total score for player

    playerStats.push({
      player: playerData.player,
      total: total,
      average: total / playerData.rounds.length,
      rounds: playerData.rounds.length,
    });
  }

  return playerStats.sort((a, b) => b.total - a.total); // Sort by total desc
}
```

## Performance Considerations

### Exercise: Loop Optimization

Compare different loop approaches for performance:

```javascript
// Test different ways to iterate over large arrays
function testLoopPerformance(size) {
  const largeArray = Array.from({ length: size }, (_, i) => i);

  console.time("for loop");
  for (let i = 0; i < largeArray.length; i++) {
    // Process element
  }
  console.timeEnd("for loop");

  console.time("for...of loop");
  for (let element of largeArray) {
    // Process element
  }
  console.timeEnd("for...of loop");

  console.time("forEach");
  largeArray.forEach((element) => {
    // Process element
  });
  console.timeEnd("forEach");
}

testLoopPerformance(1000000);
```

## Self-Assessment Checklist

- [ ] I can write and understand `for` loops with proper syntax
- [ ] I know when to use `while` vs `for` loops
- [ ] I understand the difference between `for...in` and `for...of`
- [ ] I can use `break` and `continue` statements appropriately
- [ ] I can avoid infinite loops by ensuring proper loop conditions
- [ ] I can iterate over arrays and objects effectively
- [ ] I can nest loops when needed for complex operations
- [ ] I can debug common loop-related errors
- [ ] I understand loop performance considerations
- [ ] I can apply loops to solve real-world programming problems

## Additional Practice Resources

1. Practice with different loop types on various data structures
2. Implement common algorithms using loops (sorting, searching)
3. Work with nested loops for 2D data processing
4. Practice optimizing loop performance
5. Build projects that require iteration (data processing, games, etc.)

---

**Next Topic:** [06 - Functions](./06-functions-exercises.md)
