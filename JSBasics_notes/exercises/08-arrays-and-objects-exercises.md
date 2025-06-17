# Topic 8: Arrays and Objects - Exercises

## Multiple Choice Questions

### Question 1

How do you access the third element of an array called `numbers`?
A) `numbers[3]`
B) `numbers[2]`
C) `numbers(2)`
D) `numbers.get(2)`

**Answer: B**
**Explanation:** Arrays are zero-indexed, so the third element is at index 2.

### Question 2

Which method adds an element to the end of an array?
A) `append()`
B) `add()`
C) `push()`
D) `insert()`

**Answer: C**
**Explanation:** The `push()` method adds one or more elements to the end of an array.

### Question 3

What does `array.length` return for `[1, 2, 3, undefined, 5]`?
A) 4
B) 5
C) 3
D) Error

**Answer: B**
**Explanation:** The length property returns the number of elements, including `undefined` elements.

### Question 4

How do you access a property called `name` in an object called `person`?
A) `person[name]`
B) `person.name` or `person["name"]`
C) `person(name)`
D) `person->name`

**Answer: B**
**Explanation:** Object properties can be accessed using dot notation or bracket notation with quotes.

### Question 5

What will `Object.keys({a: 1, b: 2, c: 3})` return?
A) `[1, 2, 3]`
B) `["a", "b", "c"]`
C) `{a: 1, b: 2, c: 3}`
D) `3`

**Answer: B**
**Explanation:** `Object.keys()` returns an array of the object's property names (keys).

### Question 6

Which array method creates a new array with all elements that pass a test?
A) `map()`
B) `filter()`
C) `find()`
D) `forEach()`

**Answer: B**
**Explanation:** The `filter()` method creates a new array with elements that pass the test function.

## Practical Coding Exercises

### Exercise 1: Array Basics

Create functions to perform basic array operations.

```javascript
function arrayBasics() {
    // Create an array with 5 different fruits
    const fruits = // Your code here

    // Add a fruit to the end

    // Add a fruit to the beginning

    // Remove the last fruit

    // Remove the first fruit

    // Find the index of a specific fruit

    return fruits;
}

// Test your function
console.log(arrayBasics());
```

**Solution:**

```javascript
function arrayBasics() {
  // Create an array with 5 different fruits
  const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

  console.log("Initial array:", fruits);

  // Add a fruit to the end
  fruits.push("mango");
  console.log("After push:", fruits);

  // Add a fruit to the beginning
  fruits.unshift("strawberry");
  console.log("After unshift:", fruits);

  // Remove the last fruit
  const lastFruit = fruits.pop();
  console.log("Removed last fruit:", lastFruit);
  console.log("After pop:", fruits);

  // Remove the first fruit
  const firstFruit = fruits.shift();
  console.log("Removed first fruit:", firstFruit);
  console.log("After shift:", fruits);

  // Find the index of a specific fruit
  const orangeIndex = fruits.indexOf("orange");
  console.log("Index of orange:", orangeIndex);

  return fruits;
}
```

### Exercise 2: Object Creation and Manipulation

Create and manipulate objects representing people.

```javascript
function createPerson(name, age, city) {
  // Create a person object with the given properties
  // Add a method called introduce that returns a greeting
}

function updatePerson(person, updates) {
  // Update the person object with new properties from updates object
  // Don't modify the original object, return a new one
}

// Test your functions
const person1 = createPerson("Alice", 30, "New York");
console.log(person1.introduce());

const updatedPerson = updatePerson(person1, { age: 31, job: "Developer" });
console.log(updatedPerson);
```

**Solution:**

```javascript
function createPerson(name, age, city) {
  return {
    name: name,
    age: age,
    city: city,
    introduce: function () {
      return `Hi, I'm ${this.name}, I'm ${this.age} years old and I live in ${this.city}.`;
    },
  };
}

function updatePerson(person, updates) {
  // Using object spread to create new object
  return { ...person, ...updates };
}
```

### Exercise 3: Array Methods Practice

Use array methods to transform and filter data.

```javascript
const students = [
    { name: "Alice", grade: 85, subject: "Math" },
    { name: "Bob", grade: 92, subject: "Science" },
    { name: "Charlie", grade: 78, subject: "Math" },
    { name: "Diana", grade: 96, subject: "Science" },
    { name: "Eve", grade: 89, subject: "Math" }
];

function analyzeStudents(students) {
    // 1. Get all student names
    const names = // Your code here

    // 2. Get students with grade >= 90
    const topStudents = // Your code here

    // 3. Get only Math students
    const mathStudents = // Your code here

    // 4. Calculate average grade
    const averageGrade = // Your code here

    // 5. Get array of grades only
    const grades = // Your code here

    return {
        names,
        topStudents,
        mathStudents,
        averageGrade,
        grades
    };
}

console.log(analyzeStudents(students));
```

**Solution:**

```javascript
function analyzeStudents(students) {
  // 1. Get all student names
  const names = students.map((student) => student.name);

  // 2. Get students with grade >= 90
  const topStudents = students.filter((student) => student.grade >= 90);

  // 3. Get only Math students
  const mathStudents = students.filter((student) => student.subject === "Math");

  // 4. Calculate average grade
  const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
  const averageGrade = totalGrades / students.length;

  // 5. Get array of grades only
  const grades = students.map((student) => student.grade);

  return {
    names,
    topStudents,
    mathStudents,
    averageGrade,
    grades,
  };
}
```

### Exercise 4: Nested Objects and Arrays

Work with complex nested data structures.

```javascript
const company = {
    name: "Tech Corp",
    departments: [
        {
            name: "Engineering",
            employees: [
                { name: "Alice", salary: 75000, position: "Developer" },
                { name: "Bob", salary: 85000, position: "Senior Developer" }
            ]
        },
        {
            name: "Marketing",
            employees: [
                { name: "Charlie", salary: 60000, position: "Marketer" },
                { name: "Diana", salary: 70000, position: "Manager" }
            ]
        }
    ]
};

function analyzeCompany(company) {
    // 1. Get all employee names
    const allEmployees = // Your code here

    // 2. Calculate total salary expense
    const totalSalary = // Your code here

    // 3. Find highest paid employee
    const highestPaid = // Your code here

    // 4. Group employees by position
    const byPosition = // Your code here

    return {
        allEmployees,
        totalSalary,
        highestPaid,
        byPosition
    };
}

console.log(analyzeCompany(company));
```

**Solution:**

```javascript
function analyzeCompany(company) {
  // 1. Get all employee names - flatten the nested structure
  const allEmployees = company.departments
    .flatMap((dept) => dept.employees)
    .map((emp) => emp.name);

  // 2. Calculate total salary expense
  const totalSalary = company.departments
    .flatMap((dept) => dept.employees)
    .reduce((total, emp) => total + emp.salary, 0);

  // 3. Find highest paid employee
  const allEmps = company.departments.flatMap((dept) => dept.employees);
  const highestPaid = allEmps.reduce((highest, current) =>
    current.salary > highest.salary ? current : highest,
  );

  // 4. Group employees by position
  const byPosition = {};
  allEmps.forEach((emp) => {
    if (!byPosition[emp.position]) {
      byPosition[emp.position] = [];
    }
    byPosition[emp.position].push(emp);
  });

  return {
    allEmployees,
    totalSalary,
    highestPaid,
    byPosition,
  };
}
```

### Exercise 5: Object Methods and `this`

Create objects with methods that use `this`.

```javascript
function createCalculator() {
  // Create a calculator object with:
  // - result property (starts at 0)
  // - add method
  // - subtract method
  // - multiply method
  // - divide method
  // - clear method
  // - getResult method
  // Each method should return the calculator object for chaining
}

// Test your calculator
const calc = createCalculator();
console.log(calc.add(10).multiply(2).subtract(5).getResult()); // Should be 15
```

**Solution:**

```javascript
function createCalculator() {
  return {
    result: 0,

    add: function (num) {
      this.result += num;
      return this;
    },

    subtract: function (num) {
      this.result -= num;
      return this;
    },

    multiply: function (num) {
      this.result *= num;
      return this;
    },

    divide: function (num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        console.error("Cannot divide by zero");
      }
      return this;
    },

    clear: function () {
      this.result = 0;
      return this;
    },

    getResult: function () {
      return this.result;
    },
  };
}
```

## JavaScript Test Functions

```javascript
// Test function for arrays and objects exercises
function testArraysObjectsExercises() {
  console.log("=== Testing Arrays and Objects Exercises ===");

  // Test arrayBasics
  const fruits = arrayBasics();
  const test1 = Array.isArray(fruits) && fruits.length > 0;
  console.log("arrayBasics test:", test1 ? "PASS" : "FAIL");

  // Test createPerson
  const person = createPerson("Alice", 30, "New York");
  const test2 =
    person.name === "Alice" && typeof person.introduce === "function";
  console.log("createPerson test:", test2 ? "PASS" : "FAIL");

  // Test updatePerson
  const updated = updatePerson(person, { age: 31 });
  const test3 = updated.age === 31 && person.age === 30; // Original unchanged
  console.log("updatePerson test:", test3 ? "PASS" : "FAIL");

  // Test analyzeStudents
  const students = [
    { name: "Alice", grade: 85, subject: "Math" },
    { name: "Bob", grade: 92, subject: "Science" },
  ];
  const analysis = analyzeStudents(students);
  const test4 = analysis.names.length === 2 && analysis.averageGrade === 88.5;
  console.log("analyzeStudents test:", test4 ? "PASS" : "FAIL");

  // Test calculator
  const calc = createCalculator();
  const result = calc.add(10).multiply(2).subtract(5).getResult();
  const test5 = result === 15;
  console.log("calculator test:", test5 ? "PASS" : "FAIL");
}

// Run tests
testArraysObjectsExercises();
```

## Challenge Problems

### Challenge 1: Deep Clone Function

Implement a function that creates a deep copy of an object or array.

```javascript
function deepClone(obj) {
  // Handle primitive types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    // Your implementation here
  }

  // Handle Objects
  // Your implementation here
}

// Test your function
const original = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming"],
  address: {
    city: "New York",
    zip: "10001",
  },
};

const cloned = deepClone(original);
cloned.address.city = "Boston";

console.log("Original city:", original.address.city); // Should still be "New York"
console.log("Cloned city:", cloned.address.city); // Should be "Boston"
```

**Solution:**

```javascript
function deepClone(obj) {
  // Handle primitive types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle Objects
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}
```

### Challenge 2: Array Intersection and Union

Implement functions to find intersection and union of arrays.

```javascript
function arrayIntersection(arr1, arr2) {
  // Return array of elements that exist in both arrays
  // Remove duplicates
}

function arrayUnion(arr1, arr2) {
  // Return array of all unique elements from both arrays
}

function arrayDifference(arr1, arr2) {
  // Return elements that are in arr1 but not in arr2
}

// Test your functions
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log("Intersection:", arrayIntersection(array1, array2)); // [3, 4, 5]
console.log("Union:", arrayUnion(array1, array2)); // [1, 2, 3, 4, 5, 6, 7]
console.log("Difference:", arrayDifference(array1, array2)); // [1, 2]
```

**Solution:**

```javascript
function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter((item) => set2.has(item)))];
}

function arrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

function arrayDifference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((item) => !set2.has(item));
}
```

### Challenge 3: Object Path Manipulation

Create functions to get and set values in nested objects using dot notation paths.

```javascript
function getNestedValue(obj, path) {
  // Get value from nested object using path like "user.address.city"
}

function setNestedValue(obj, path, value) {
  // Set value in nested object using path
  // Create nested objects if they don't exist
}

// Test your functions
const data = {
  user: {
    name: "John",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

console.log(getNestedValue(data, "user.name")); // "John"
console.log(getNestedValue(data, "user.address.city")); // "New York"

setNestedValue(data, "user.age", 30);
setNestedValue(data, "user.contact.email", "john@email.com");
console.log(data);
```

**Solution:**

```javascript
function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

function setNestedValue(obj, path, value) {
  const keys = path.split(".");
  const lastKey = keys.pop();

  const target = keys.reduce((current, key) => {
    if (current[key] === undefined || typeof current[key] !== "object") {
      current[key] = {};
    }
    return current[key];
  }, obj);

  target[lastKey] = value;
}
```

### Challenge 4: Array Grouping and Aggregation

Create a flexible grouping function for arrays of objects.

```javascript
function groupBy(array, keyOrFunction) {
  // Group array elements by a key or the result of a function
}

function aggregate(groupedData, aggregations) {
  // Apply aggregation functions to grouped data
  // aggregations = { count: 'count', avgAge: 'avg:age', totalSalary: 'sum:salary' }
}

// Test data
const employees = [
  { name: "Alice", department: "Engineering", age: 30, salary: 75000 },
  { name: "Bob", department: "Engineering", age: 25, salary: 65000 },
  { name: "Charlie", department: "Marketing", age: 35, salary: 60000 },
  { name: "Diana", department: "Marketing", age: 28, salary: 70000 },
];

// Test your functions
const byDepartment = groupBy(employees, "department");
console.log(byDepartment);

const aggregated = aggregate(byDepartment, {
  count: "count",
  avgAge: "avg:age",
  totalSalary: "sum:salary",
});
console.log(aggregated);
```

**Solution:**

```javascript
function groupBy(array, keyOrFunction) {
  const groups = {};

  array.forEach((item) => {
    let key;
    if (typeof keyOrFunction === "function") {
      key = keyOrFunction(item);
    } else {
      key = item[keyOrFunction];
    }

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
  });

  return groups;
}

function aggregate(groupedData, aggregations) {
  const result = {};

  Object.keys(groupedData).forEach((groupKey) => {
    const group = groupedData[groupKey];
    result[groupKey] = {};

    Object.keys(aggregations).forEach((aggKey) => {
      const aggConfig = aggregations[aggKey];

      if (aggConfig === "count") {
        result[groupKey][aggKey] = group.length;
      } else if (aggConfig.startsWith("sum:")) {
        const field = aggConfig.split(":")[1];
        result[groupKey][aggKey] = group.reduce(
          (sum, item) => sum + item[field],
          0,
        );
      } else if (aggConfig.startsWith("avg:")) {
        const field = aggConfig.split(":")[1];
        const sum = group.reduce((sum, item) => sum + item[field], 0);
        result[groupKey][aggKey] = sum / group.length;
      }
    });
  });

  return result;
}
```

## Debugging Exercises

### Debug Exercise 1

Fix the array mutation issue:

```javascript
function addToArray(arr, item) {
  arr.push(item); // This mutates the original array
  return arr;
}

const originalArray = [1, 2, 3];
const newArray = addToArray(originalArray, 4);
console.log(originalArray); // [1, 2, 3, 4] - mutated!
```

**Fix:**

```javascript
function addToArray(arr, item) {
  return [...arr, item]; // Create new array
}

// Alternative:
function addToArray(arr, item) {
  return arr.concat(item);
}
```

### Debug Exercise 2

Fix the object reference issue:

```javascript
function updateUser(user, updates) {
  user.name = updates.name; // Mutates original object
  user.age = updates.age;
  return user;
}

const originalUser = { name: "Alice", age: 30 };
const updatedUser = updateUser(originalUser, { name: "Alice Smith", age: 31 });
console.log(originalUser); // { name: "Alice Smith", age: 31 } - mutated!
```

**Fix:**

```javascript
function updateUser(user, updates) {
  return { ...user, ...updates }; // Create new object
}

// Alternative:
function updateUser(user, updates) {
  return Object.assign({}, user, updates);
}
```

### Debug Exercise 3

Fix the array method chaining issue:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((n) => n > 2)
  .map((n) => n * 2)
  .sort(); // Problem: sort() converts to strings by default

console.log(result); // ["10", "6", "8"] - not what we want!
```

**Fix:**

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((n) => n > 2)
  .map((n) => n * 2)
  .sort((a, b) => a - b); // Proper numeric sort

console.log(result); // [6, 8, 10] - correct!
```

## Real-World Applications

### Application 1: Shopping Cart Management

Create a shopping cart system with arrays and objects.

```javascript
function createShoppingCart() {
  let items = [];

  return {
    addItem: function (product, quantity = 1) {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        items.push({ ...product, quantity });
      }
    },

    removeItem: function (productId) {
      items = items.filter((item) => item.id !== productId);
    },

    updateQuantity: function (productId, quantity) {
      const item = items.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },

    getTotal: function () {
      return items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    getItems: function () {
      return [...items]; // Return copy to prevent mutation
    },

    clear: function () {
      items = [];
    },
  };
}

// Usage
const cart = createShoppingCart();
cart.addItem({ id: 1, name: "Laptop", price: 999 });
cart.addItem({ id: 2, name: "Mouse", price: 25 }, 2);
console.log("Total:", cart.getTotal());
console.log("Items:", cart.getItems());
```

### Application 2: Data Processing Pipeline

Create a data processing system for handling collections.

```javascript
function createDataProcessor() {
  return {
    clean: function (data) {
      // Remove null/undefined values and trim strings
      return data
        .filter((item) => item != null)
        .map((item) => {
          if (typeof item === "string") {
            return item.trim();
          }
          if (typeof item === "object") {
            const cleaned = {};
            Object.keys(item).forEach((key) => {
              if (item[key] != null) {
                cleaned[key] =
                  typeof item[key] === "string" ? item[key].trim() : item[key];
              }
            });
            return cleaned;
          }
          return item;
        });
    },

    validate: function (data, schema) {
      // Validate data against a simple schema
      return data.filter((item) => {
        return Object.keys(schema).every((key) => {
          const rule = schema[key];
          const value = item[key];

          if (rule.required && (value == null || value === "")) {
            return false;
          }

          if (rule.type && typeof value !== rule.type) {
            return false;
          }

          return true;
        });
      });
    },

    transform: function (data, transformations) {
      // Apply transformations to data
      return data.map((item) => {
        const transformed = { ...item };

        Object.keys(transformations).forEach((key) => {
          const transform = transformations[key];
          if (typeof transform === "function") {
            transformed[key] = transform(item[key], item);
          }
        });

        return transformed;
      });
    },
  };
}

// Usage
const processor = createDataProcessor();
const rawData = [
  { name: "  Alice  ", age: "30", email: "alice@email.com" },
  { name: "Bob", age: "25", email: null },
  null,
  { name: "", age: "35", email: "charlie@email.com" },
];

const cleanData = processor.clean(rawData);
const validData = processor.validate(cleanData, {
  name: { required: true, type: "string" },
  age: { required: true },
  email: { required: false, type: "string" },
});

const transformedData = processor.transform(validData, {
  age: (age) => parseInt(age),
  fullName: (_, item) => item.name.toUpperCase(),
});

console.log(transformedData);
```

### Application 3: Search and Filter System

Create a flexible search system for collections.

```javascript
function createSearchEngine(data) {
  return {
    search: function (query, fields = []) {
      const lowerQuery = query.toLowerCase();

      return data.filter((item) => {
        if (fields.length === 0) {
          // Search all string fields
          return Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(lowerQuery),
          );
        } else {
          // Search specific fields
          return fields.some((field) => {
            const value = item[field];
            return (
              typeof value === "string" &&
              value.toLowerCase().includes(lowerQuery)
            );
          });
        }
      });
    },

    filter: function (filters) {
      return data.filter((item) => {
        return Object.keys(filters).every((key) => {
          const filterValue = filters[key];
          const itemValue = item[key];

          if (typeof filterValue === "function") {
            return filterValue(itemValue);
          }

          if (Array.isArray(filterValue)) {
            return filterValue.includes(itemValue);
          }

          return itemValue === filterValue;
        });
      });
    },

    sort: function (field, direction = "asc") {
      return [...data].sort((a, b) => {
        let valueA = a[field];
        let valueB = b[field];

        // Handle different data types
        if (typeof valueA === "string") {
          valueA = valueA.toLowerCase();
          valueB = valueB.toLowerCase();
        }

        if (direction === "asc") {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      });
    },
  };
}
```

## Self-Assessment Checklist

- [ ] I can create and manipulate arrays using various methods
- [ ] I understand how to access and modify array elements
- [ ] I can use array methods like `map()`, `filter()`, `reduce()`, etc.
- [ ] I can create and work with objects using different syntaxes
- [ ] I understand object property access methods (dot and bracket notation)
- [ ] I can work with nested arrays and objects
- [ ] I understand the difference between mutation and immutability
- [ ] I can use object methods and understand `this` context
- [ ] I can debug common array and object-related issues
- [ ] I can apply arrays and objects to solve real-world problems

## Additional Practice Resources

1. Practice array method chaining with different datasets
2. Work with complex nested data structures (JSON APIs)
3. Implement common data manipulation patterns
4. Practice object-oriented patterns with objects
5. Build projects that heavily use arrays and objects
6. Practice immutable programming patterns
7. Work with real-world data transformation scenarios

---

**Next Topic:** [09 - Built-in Methods](./09-built-in-methods-exercises.md)
