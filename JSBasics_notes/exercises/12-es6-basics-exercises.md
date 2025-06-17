# ES6+ Basics - Exercises

## Topic: ES6+ Basics

Key concepts: Template literals, destructuring, default parameters, arrow functions, spread/rest operators, const/let

---

## Multiple Choice Questions

### Question 1

What is the correct syntax for template literals?

- A) "Hello ${name}"
- B) 'Hello ${name}'
- C) `Hello ${name}`
- D) Hello ${name}

**Answer: C**
**Explanation:** Template literals use backticks (`) and ${} for expression interpolation.

### Question 2

Which is the correct way to destructure an array?

- A) const [a, b] = [1, 2]
- B) const {a, b} = [1, 2]
- C) const a, b = [1, 2]
- D) const [a; b] = [1, 2]

**Answer: A**
**Explanation:** Array destructuring uses square brackets to extract values by position.

### Question 3

What does the spread operator (...) do with arrays?

- A) Combines two arrays
- B) Expands array elements
- C) Creates a copy of an array
- D) All of the above

**Answer: D**
**Explanation:** The spread operator can expand, combine, and copy arrays.

### Question 4

Which is the correct syntax for default parameters?

- A) function greet(name = "World") {}
- B) function greet(name default "World") {}
- C) function greet(name || "World") {}
- D) function greet(name ?? "World") {}

**Answer: A**
**Explanation:** Default parameters use the = operator in the function signature.

### Question 5

What's the difference between const and let?

- A) const is function-scoped, let is block-scoped
- B) const cannot be reassigned, let can be
- C) const is hoisted, let is not
- D) No difference

**Answer: B**
**Explanation:** const variables cannot be reassigned after declaration, while let variables can be.

### Question 6

Which arrow function syntax is correct for multiple parameters?

- A) x, y => x + y
- B) (x, y) => x + y
- C) x; y => x + y
- D) [x, y] => x + y

**Answer: B**
**Explanation:** Multiple parameters in arrow functions must be wrapped in parentheses.

---

## Practical Exercises

### Exercise 1: Template Literals

Create a function that generates a personalized greeting using template literals.

```javascript
function createGreeting(name, age, city) {
  // Use template literals to create a greeting
  // Example output: "Hello John! You are 25 years old and live in New York."
}

// Test the function
console.log(createGreeting("John", 25, "New York"));
```

**Solution:**

```javascript
function createGreeting(name, age, city) {
  return `Hello ${name}! You are ${age} years old and live in ${city}.`;
}
```

### Exercise 2: Array Destructuring

Extract values from arrays using destructuring assignment.

```javascript
const colors = ["red", "green", "blue", "yellow", "purple"];

// TODO: Use destructuring to extract:
// - first color into variable 'primary'
// - second color into variable 'secondary'
// - remaining colors into variable 'others'

console.log(primary); // "red"
console.log(secondary); // "green"
console.log(others); // ["blue", "yellow", "purple"]
```

**Solution:**

```javascript
const [primary, secondary, ...others] = colors;
```

### Exercise 3: Object Destructuring

Extract properties from objects with destructuring.

```javascript
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  city: "Boston",
};

// TODO: Use destructuring to extract name, email, and age
// Rename 'name' to 'username' during destructuring

console.log(username); // "Alice"
console.log(email); // "alice@example.com"
console.log(age); // 30
```

**Solution:**

```javascript
const { name: username, email, age } = user;
```

### Exercise 4: Default Parameters

Create a function with default parameters for calculating area.

```javascript
function calculateRectangleArea(/* Add parameters with defaults */) {
  // Default width should be 1, default height should be 1
  return width * height;
}

// Test cases
console.log(calculateRectangleArea()); // 1 (1 * 1)
console.log(calculateRectangleArea(5)); // 5 (5 * 1)
console.log(calculateRectangleArea(5, 3)); // 15 (5 * 3)
```

**Solution:**

```javascript
function calculateRectangleArea(width = 1, height = 1) {
  return width * height;
}
```

### Exercise 5: Spread Operator

Use the spread operator to combine and manipulate arrays.

```javascript
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];
const grains = ["rice", "wheat"];

// TODO: Use spread operator to:
// 1. Combine all arrays into 'allFoods'
// 2. Create a copy of fruits called 'moreFruits' and add "orange"
// 3. Create 'firstTwo' with just the first two items from allFoods

console.log(allFoods); // ["apple", "banana", "carrot", "broccoli", "rice", "wheat"]
console.log(moreFruits); // ["apple", "banana", "orange"]
console.log(firstTwo); // ["apple", "banana"]
```

**Solution:**

```javascript
const allFoods = [...fruits, ...vegetables, ...grains];
const moreFruits = [...fruits, "orange"];
const firstTwo = allFoods.slice(0, 2);
```

### Exercise 6: Arrow Functions

Convert regular functions to arrow functions.

```javascript
// Convert these functions to arrow function syntax:

// 1. Regular function
function double(x) {
  return x * 2;
}

// 2. Function with multiple parameters
function add(a, b) {
  return a + b;
}

// 3. Function with no parameters
function getCurrentTime() {
  return new Date().toISOString();
}

// 4. Function with object return
function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}
```

**Solution:**

```javascript
// 1. Arrow function (single parameter, no parentheses needed)
const double = (x) => x * 2;

// 2. Arrow function (multiple parameters, parentheses required)
const add = (a, b) => a + b;

// 3. Arrow function (no parameters, parentheses required)
const getCurrentTime = () => new Date().toISOString();

// 4. Arrow function (object return, wrap in parentheses)
const createPerson = (name, age) => ({
  name: name,
  age: age,
});
```

---

## JavaScript Test Functions

```javascript
// Test functions for ES6+ exercises
function testES6Basics() {
  console.log("🧪 Testing ES6+ Basics...\n");

  // Test template literals
  function testTemplateLiterals() {
    const name = "Test";
    const age = 25;
    const result = `Hello ${name}, you are ${age} years old`;
    const expected = "Hello Test, you are 25 years old";
    console.log(
      `Template Literals: ${result === expected ? "✅ PASS" : "❌ FAIL"}`,
    );
  }

  // Test destructuring
  function testDestructuring() {
    const arr = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = arr;
    const obj = { x: 10, y: 20, z: 30 };
    const { x, y } = obj;

    const arrTest = first === 1 && second === 2 && rest.length === 3;
    const objTest = x === 10 && y === 20;

    console.log(`Array Destructuring: ${arrTest ? "✅ PASS" : "❌ FAIL"}`);
    console.log(`Object Destructuring: ${objTest ? "✅ PASS" : "❌ FAIL"}`);
  }

  // Test default parameters
  function testDefaultParams() {
    const greet = (name = "World") => `Hello ${name}`;
    const test1 = greet() === "Hello World";
    const test2 = greet("Alice") === "Hello Alice";

    console.log(
      `Default Parameters: ${test1 && test2 ? "✅ PASS" : "❌ FAIL"}`,
    );
  }

  // Test spread operator
  function testSpreadOperator() {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const combined = [...arr1, ...arr2];
    const test = combined.length === 4 && combined[2] === 3;

    console.log(`Spread Operator: ${test ? "✅ PASS" : "❌ FAIL"}`);
  }

  // Test arrow functions
  function testArrowFunctions() {
    const multiply = (a, b) => a * b;
    const square = (x) => x * x;
    const getTrue = () => true;

    const test =
      multiply(3, 4) === 12 && square(5) === 25 && getTrue() === true;
    console.log(`Arrow Functions: ${test ? "✅ PASS" : "❌ FAIL"}`);
  }

  testTemplateLiterals();
  testDestructuring();
  testDefaultParams();
  testSpreadOperator();
  testArrowFunctions();

  console.log("\n✨ ES6+ Basics tests completed!");
}

// Run the tests
testES6Basics();
```

---

## Challenge Problems

### Challenge 1: Advanced Destructuring

Create a function that extracts nested object properties using destructuring.

```javascript
const user = {
  id: 1,
  profile: {
    name: "John",
    contact: {
      email: "john@example.com",
      phone: "123-456-7890",
    },
  },
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Extract: name, email, theme using destructuring in function parameters
function displayUserInfo(/* destructure here */) {
  return `${name} (${email}) prefers ${theme} theme`;
}

console.log(displayUserInfo(user));
// Output: "John (john@example.com) prefers dark theme"
```

**Solution:**

```javascript
function displayUserInfo({
  profile: {
    name,
    contact: { email },
  },
  preferences: { theme },
}) {
  return `${name} (${email}) prefers ${theme} theme`;
}
```

### Challenge 2: Dynamic Template Literals

Create a template literal function that generates HTML.

```javascript
function createUserCard(user) {
  // Use template literals to create an HTML card
  // Include: name, age, email, and a profile image
  // Add CSS classes and proper HTML structure
}

const user = {
  name: "Alice Johnson",
  age: 28,
  email: "alice@example.com",
  avatar: "https://example.com/avatar.jpg",
};

console.log(createUserCard(user));
```

**Solution:**

```javascript
function createUserCard(user) {
  return `
        <div class="user-card">
            <img src="${user.avatar}" alt="${user.name}" class="avatar">
            <div class="user-info">
                <h2 class="name">${user.name}</h2>
                <p class="age">Age: ${user.age}</p>
                <p class="email">📧 ${user.email}</p>
            </div>
        </div>
    `;
}
```

### Challenge 3: Spread and Rest Mastery

Create utility functions using spread and rest operators.

```javascript
// Create a function that merges multiple objects
function mergeObjects(/* use rest parameters */) {
  // Merge all objects, later properties override earlier ones
}

// Create a function that finds common elements in arrays
function findCommon(...arrays) {
  // Return elements that exist in all arrays
}

// Test cases
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

console.log(mergeObjects(obj1, obj2, obj3)); // { a: 1, b: 3, c: 5, d: 6 }

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const arr3 = [3, 6, 7, 8];

console.log(findCommon(arr1, arr2, arr3)); // [3]
```

**Solution:**

```javascript
function mergeObjects(...objects) {
  return Object.assign({}, ...objects);
  // or: return { ...objects.reduce((acc, obj) => ({ ...acc, ...obj }), {}) };
}

function findCommon(...arrays) {
  if (arrays.length === 0) return [];
  return arrays.reduce((common, current) =>
    common.filter((item) => current.includes(item)),
  );
}
```

### Challenge 4: Arrow Function Composition

Create a pipeline of arrow functions for data transformation.

```javascript
const users = [
    { name: "Alice", age: 25, city: "New York", salary: 50000 },
    { name: "Bob", age: 30, city: "Boston", salary: 60000 },
    { name: "Charlie", age: 35, city: "New York", salary: 70000 },
    { name: "Diana", age: 28, city: "Boston", salary: 55000 }
];

// Create arrow functions for:
const filterByCity = city => /* filter users by city */;
const mapToSummary = /* map to {name, age} objects */;
const sortByAge = /* sort by age ascending */;

// Chain them together to get New York users, summary format, sorted by age
const result = sortByAge(mapToSummary(filterByCity("New York")(users)));
console.log(result);
```

**Solution:**

```javascript
const filterByCity = (city) => (users) =>
  users.filter((user) => user.city === city);
const mapToSummary = (users) =>
  users.map((user) => ({ name: user.name, age: user.age }));
const sortByAge = (users) => users.sort((a, b) => a.age - b.age);

// Or create a compose function:
const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const transform = compose(sortByAge, mapToSummary, filterByCity("New York"));
const result = transform(users);
```

---

## Debugging Exercises

### Debug 1: Template Literal Issues

```javascript
// This code has template literal errors - fix them
const name = "John";
const age = 25;

const message1 = "Hello ${name}";  // Should use template literal
const message2 = `Your age is " + age`;  // Mixed syntax
const message3 = `Welcome ${name`; // Missing closing }

console.log(message1, message2, message3);
```

**Fixed Version:**

```javascript
const name = "John";
const age = 25;

const message1 = `Hello ${name}`;
const message2 = `Your age is ${age}`;
const message3 = `Welcome ${name}`;

console.log(message1, message2, message3);
```

### Debug 2: Destructuring Problems

```javascript
// Fix the destructuring errors
const person = { name: "Alice", age: 30, city: "Boston" };

const [name, age] = person; // Wrong destructuring type
const { x, y, z } = person; // Wrong property names
const { name: fullName } = person;
console.log(name); // This will cause an error

const numbers = [1, 2, 3, 4, 5];
const { first, second } = numbers; // Wrong destructuring type
```

**Fixed Version:**

```javascript
const person = { name: "Alice", age: 30, city: "Boston" };

const { name, age } = person; // Object destructuring
const { name: x, age: y, city: z } = person; // Renamed properties
const { name: fullName } = person;
console.log(fullName); // Use the renamed variable

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers; // Array destructuring
```

---

## Real-World Applications

### Application 1: Configuration Object

Create a configuration system using ES6+ features.

```javascript
// Default configuration
const defaultConfig = {
  theme: "light",
  language: "en",
  notifications: true,
  autoSave: false,
};

function createAppConfig(userConfig = {}) {
  // Merge user config with defaults using spread
  const config = { ...defaultConfig, ...userConfig };

  // Generate configuration summary using template literals
  const summary = `
        App Configuration:
        Theme: ${config.theme}
        Language: ${config.language}
        Notifications: ${config.notifications ? "Enabled" : "Disabled"}
        Auto-save: ${config.autoSave ? "Enabled" : "Disabled"}
    `;

  return { config, summary };
}

// Usage
const userPrefs = { theme: "dark", notifications: false };
const { config, summary } = createAppConfig(userPrefs);
console.log(summary);
```

### Application 2: Data Processing Pipeline

Process API data using ES6+ features.

```javascript
const apiData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    department: "Engineering",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    department: "Design",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 35,
    department: "Engineering",
  },
];

// Process employee data
const processEmployees = (employees, department = null) => {
  return employees
    .filter((emp) => (department ? emp.department === department : true))
    .map(({ firstName, lastName, age, department }) => ({
      fullName: `${firstName} ${lastName}`,
      age,
      department,
      summary: `${firstName} ${lastName} (${age}) works in ${department}`,
    }))
    .sort((a, b) => a.age - b.age);
};

const engineeringTeam = processEmployees(apiData, "Engineering");
console.log(engineeringTeam);
```

### Application 3: Modern Form Handler

Handle form data with ES6+ features.

```javascript
class FormHandler {
  constructor(formId, options = {}) {
    this.form = document.getElementById(formId);
    this.options = {
      validateOnInput: true,
      showErrors: true,
      submitEndpoint: "/api/submit",
      ...options,
    };
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener("submit", this.handleSubmit);

    if (this.options.validateOnInput) {
      this.form.addEventListener("input", this.handleInput);
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Destructure required fields
    const { name, email, message } = data;

    if (!this.validateData({ name, email, message })) {
      return;
    }

    try {
      await this.submitData(data);
      this.showSuccess(`Thank you ${name}! Your message has been sent.`);
    } catch (error) {
      this.showError(`Sorry ${name}, there was an error: ${error.message}`);
    }
  };

  validateData({ name = "", email = "", message = "" }) {
    const errors = [];

    if (!name.trim()) errors.push("Name is required");
    if (!email.includes("@")) errors.push("Valid email is required");
    if (message.length < 10)
      errors.push("Message must be at least 10 characters");

    if (errors.length > 0 && this.options.showErrors) {
      this.showError(errors.join(", "));
      return false;
    }

    return true;
  }

  showSuccess = (message) => {
    console.log(`✅ Success: ${message}`);
  };

  showError = (message) => {
    console.log(`❌ Error: ${message}`);
  };
}

// Usage
// const contactForm = new FormHandler('contact-form', {
//     validateOnInput: true,
//     submitEndpoint: '/api/contact'
// });
```

---

## Self-Assessment Checklist

### Template Literals ✅

- [ ] Can create multi-line strings with template literals
- [ ] Can embed expressions using ${}
- [ ] Can use template literals for HTML generation
- [ ] Understand when to use template literals vs regular strings

### Destructuring ✅

- [ ] Can destructure arrays with position-based extraction
- [ ] Can destructure objects with property names
- [ ] Can rename variables during destructuring
- [ ] Can use rest operator with destructuring
- [ ] Can destructure nested objects and arrays
- [ ] Can use destructuring in function parameters

### Default Parameters ✅

- [ ] Can define functions with default parameter values
- [ ] Understand how default parameters work with undefined
- [ ] Can use expressions as default values
- [ ] Can combine default parameters with destructuring

### Arrow Functions ✅

- [ ] Can write arrow functions with different syntaxes
- [ ] Understand when parentheses are required
- [ ] Can return objects from arrow functions
- [ ] Understand arrow function scope differences
- [ ] Can use arrow functions as callbacks

### Spread/Rest Operators ✅

- [ ] Can use spread to expand arrays
- [ ] Can use spread to copy arrays and objects
- [ ] Can use rest parameters in functions
- [ ] Can combine spread and rest operators
- [ ] Understand the difference between spread and rest

### const/let ✅

- [ ] Understand block scoping with let and const
- [ ] Know when to use const vs let
- [ ] Understand const immutability rules
- [ ] Can avoid var in modern JavaScript
- [ ] Understand temporal dead zone concepts

**Next Steps:**

- Practice combining multiple ES6+ features in real projects
- Learn about more advanced ES6+ features (classes, modules, async/await)
- Study functional programming patterns with arrow functions
- Explore modern JavaScript frameworks that heavily use ES6+
