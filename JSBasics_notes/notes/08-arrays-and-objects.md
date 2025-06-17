# Arrays & Objects

> **Topic**: Arrays & Objects  
> **Concepts Covered**: Creation, access, array methods (`push`, `map`), object properties

## Arrays

Arrays are ordered collections of values, perfect for storing lists of data.

### Creating Arrays

```javascript
// Empty array
let emptyArray = [];

// Array with initial values
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["string", 42, true, null];
```

### Accessing Array Elements

Arrays use zero-based indexing:

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // "Apple" (first element)
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Cherry"
console.log(fruits[3]); // undefined (doesn't exist)

// Get array length
console.log(fruits.length); // 3
```

### Modifying Arrays

```javascript
let fruits = ["Apple", "Banana"];

// Add elements
fruits[2] = "Cherry"; // Add at specific index
fruits.push("Date"); // Add to end
fruits.unshift("Elderberry"); // Add to beginning

console.log(fruits); // ["Elderberry", "Apple", "Banana", "Cherry", "Date"]

// Remove elements
let last = fruits.pop(); // Remove and return last element
let first = fruits.shift(); // Remove and return first element

console.log(last); // "Date"
console.log(first); // "Elderberry"
```

### Essential Array Methods

#### Adding/Removing Elements

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

// push() - add to end
fruits.push("Date", "Fig");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date", "Fig"]

// pop() - remove from end
let removed = fruits.pop();
console.log(removed); // "Fig"

// unshift() - add to beginning
fruits.unshift("Elderberry");
console.log(fruits); // ["Elderberry", "Apple", "Banana", "Cherry", "Date"]

// shift() - remove from beginning
let first = fruits.shift();
console.log(first); // "Elderberry"
```

#### Finding Elements

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

// indexOf() - find index of element
let index = fruits.indexOf("Banana");
console.log(index); // 1

// includes() - check if element exists
console.log(fruits.includes("Apple")); // true
console.log(fruits.includes("Grape")); // false
```

#### Modifying Arrays

```javascript
let months = ["Jan", "March", "Jun", "Aug"];

// splice() - add/remove elements at specific position
months.splice(1, 0, "Feb"); // Insert "Feb" at index 1
console.log(months); // ["Jan", "Feb", "March", "Jun", "Aug"]

months.splice(4, 1, "July"); // Replace 1 element at index 4
console.log(months); // ["Jan", "Feb", "March", "Jun", "July"]

// slice() - create new array with portion of original
let firstThree = months.slice(0, 3);
console.log(firstThree); // ["Jan", "Feb", "March"]
console.log(months); // Original unchanged: ["Jan", "Feb", "March", "Jun", "July"]
```

### Looping Through Arrays

#### Traditional For Loop

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}
```

#### For...Of Loop (Modern)

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

#### forEach Method

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function (fruit, index) {
  console.log(`${index}: ${fruit}`);
});

// Arrow function version
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

### Higher-Order Array Methods

#### map() - Transform Each Element

```javascript
let numbers = [1, 2, 3, 4, 5];

// Square each number
let squared = numbers.map(function (num) {
  return num * num;
});
console.log(squared); // [1, 4, 9, 16, 25]

// Arrow function version
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Transform strings
let names = ["alice", "bob", "charlie"];
let capitalized = names.map((name) => name.toUpperCase());
console.log(capitalized); // ["ALICE", "BOB", "CHARLIE"]
```

#### Practical Array Functions

```javascript
// Generate multiplication table
function generateMultiples(number) {
  const multiples = [];

  for (let i = 1; i <= 12; i++) {
    multiples.push(number * i);
  }

  return multiples;
}

console.log(generateMultiples(3)); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]

// Square array elements
function squareArray(numbers) {
  return numbers.map((num) => num ** 2);
}

console.log(squareArray([1, 2, 3, 4])); // [1, 4, 9, 16]
```

## Objects

Objects are collections of key-value pairs, perfect for storing related data.

### Creating Objects

```javascript
// Object literal syntax
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

// Empty object
let emptyObject = {};
```

### Accessing Object Properties

#### Dot Notation

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.firstName); // "John"
console.log(person.age); // 30
```

#### Bracket Notation

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  "favorite color": "blue", // Property with space
};

console.log(person["firstName"]); // "John"
console.log(person["favorite color"]); // "blue"

// Dynamic property access
let property = "age";
console.log(person[property]); // Access using variable
```

### Modifying Objects

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
};

// Add new properties
person.age = 30;
person["email"] = "john@example.com";

// Modify existing properties
person.firstName = "Jane";

// Delete properties
delete person.age;

console.log(person); // { firstName: "Jane", lastName: "Doe", email: "john@example.com" }
```

### Object Methods

```javascript
let student = {
  firstName: "Alice",
  lastName: "Johnson",
  grade: 85,

  // Method using function keyword
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  // Method using shorthand syntax
  getGradeStatus() {
    return this.grade >= 60 ? "Pass" : "Fail";
  },
};

console.log(student.getFullName()); // "Alice Johnson"
console.log(student.getGradeStatus()); // "Pass"
```

### The `this` Keyword

`this` refers to the object that the method belongs to:

```javascript
let calculator = {
  value: 0,

  add(number) {
    this.value += number;
    return this; // Return this for chaining
  },

  subtract(number) {
    this.value -= number;
    return this;
  },

  getValue() {
    return this.value;
  },
};

// Method chaining
let result = calculator.add(10).subtract(3).getValue();
console.log(result); // 7
```

### Object Utility Methods

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Get all keys
let keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

// Get all values
let values = Object.values(person);
console.log(values); // ["John", 30, "New York"]

// Get key-value pairs
let entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 30], ["city", "New York"]]
```

### Looping Through Objects

#### For...In Loop

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York
```

#### Using Object Methods

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Loop through keys
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// Loop through values
Object.values(person).forEach((value) => {
  console.log(value);
});

// Loop through entries
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

### Nested Objects and Arrays

```javascript
let student = {
  name: "Alice",
  grades: [85, 92, 78, 96],
  address: {
    street: "123 Main St",
    city: "Boston",
    zip: "02101",
  },

  getAverageGrade() {
    let sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  },
};

console.log(student.address.city); // "Boston"
console.log(student.grades[0]); // 85
console.log(student.getAverageGrade()); // 87.75
```

## Practical Examples

### Student Management System

```javascript
function createStudent(firstName, lastName, grades = []) {
  return {
    firstName,
    lastName,
    grades,

    addGrade(grade) {
      this.grades.push(grade);
    },

    getAverage() {
      if (this.grades.length === 0) return 0;
      let sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    },

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

let student1 = createStudent("John", "Doe", [85, 92, 78]);
student1.addGrade(88);
console.log(`${student1.getFullName()}: ${student1.getAverage()}`);
```

### Inventory System

```javascript
let inventory = [
  { id: 1, name: "Laptop", price: 999, quantity: 5 },
  { id: 2, name: "Mouse", price: 25, quantity: 20 },
  { id: 3, name: "Keyboard", price: 75, quantity: 15 },
];

// Find item by ID
function findItemById(id) {
  return inventory.find((item) => item.id === id);
}

// Update quantity
function updateQuantity(id, newQuantity) {
  let item = findItemById(id);
  if (item) {
    item.quantity = newQuantity;
  }
}

// Calculate total inventory value
function calculateTotalValue() {
  return inventory.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

console.log(calculateTotalValue()); // Total value of all items
```

## Best Practices

1. **Use descriptive property names**: `firstName` instead of `fn`
2. **Use dot notation when possible**: More readable than bracket notation
3. **Group related data in objects**: Better organization
4. **Use methods for object behavior**: Keep data and behavior together
5. **Use `const` for arrays/objects**: The reference won't change (contents can)

## Common Pitfalls

1. **Mutating arrays/objects unintentionally**: Use methods that return new arrays
2. **Confusing array methods**: `push` modifies original, `concat` returns new
3. **Wrong `this` context**: Arrow functions don't have their own `this`
4. **Accessing non-existent properties**: Results in `undefined`

## Key Takeaways

- **Arrays**: Use for ordered lists of data
- **Objects**: Use for structured data with named properties
- **Array methods**: `push`, `pop`, `map`, `forEach` are essential
- **Object access**: Use dot notation or bracket notation
- **`this` keyword**: Refers to the object in method context
- **Iteration**: Multiple ways to loop through arrays and objects

## Practice Exercises

1. Create a shopping cart system with add/remove/total functionality
2. Build a grade book that calculates averages and letter grades
3. Make a simple contact management system
4. Create a library system to track books and borrowers
5. Build a simple inventory management system
